import axios, { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'

// Packages
import { Api } from '@ades/types'

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
    _retry?: boolean
}

export class HttpService {
    protected _instance: AxiosInstance

    constructor() {
        this._instance = axios.create({
            baseURL: import.meta.env.VITE_API_ROOT,
            headers: {
                'Content-Type': 'application/json',
            },
        })

        this.setupInterceptors()
    }

    private setupInterceptors() {
        this._instance.interceptors.request.use(this.requestInterceptor)
        this._instance.interceptors.response.use(this.responseSuccessInterceptor, this.responseErrorInterceptor)
    }

    private requestInterceptor = (config: InternalAxiosRequestConfig) => {
        const accessToken = Cookies.get('access')

        if (accessToken && config.headers) {
            config.headers.set('Authorization', `Bearer ${accessToken}`)
        }

        return config
    }

    private responseSuccessInterceptor = (response: AxiosResponse) => response

    private responseErrorInterceptor = async (error: AxiosError) => {
        const originalRequest = error.config as CustomAxiosRequestConfig

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            try {
                const newTokens = await this._refreshTokens()

                if (newTokens) {
                    axios.defaults.headers['Authorization'] = `Bearer ${newTokens.access}`

                    return this._instance(originalRequest)
                }
            } catch (refreshError) {
                this._handleLogout()
                return Promise.reject(refreshError)
            }
        }

        return Promise.reject(error)
    }

    private async _refreshTokens(): Promise<Api.Tokens | null> {
        const refreshToken = Cookies.get('refresh')

        if (!refreshToken) {
            this._handleLogout()
            return null
        }

        try {
            const response = await axios.post<Api.Response<Api.Tokens>>(
                `${import.meta.env.VITE_API_ROOT}/authentication/refresh`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`,
                        'Content-Type': 'application/json',
                    },
                },
            )

            const { access, refresh } = response.data.data

            Cookies.set('access', access, { expires: 15 / (24 * 60), path: '/', secure: true })
            Cookies.set('refresh', refresh, { expires: 7, path: '/', secure: true })

            return response.data.data
        } catch (error) {
            this._handleLogout()
            return null
        }
    }

    private _handleLogout() {
        Cookies.remove('access', { path: '/' })
        Cookies.remove('refresh', { path: '/' })
    }
}
