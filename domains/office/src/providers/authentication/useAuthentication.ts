import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

// Query
import { queryClient } from '@/providers/query'

export function useAuthentication() {
    const [initialised, setInitialised] = useState<boolean>(false)
    const [authenticated, setAuthenticated] = useState<boolean>(false)

    useEffect(() => {
        async function init() {
            const access = Cookies.get('access')

            if (access) {
                try {
                    setAuthenticated(true)
                } catch (err) {
                    unauthorize()
                }
            }

            setInitialised(true)
        }

        init()
    }, [])

    const authorize = async (tokens: { access: string; refresh: string }, callback?: () => void) => {
        try {
            Cookies.set('access', tokens.access, { secure: true, sameSite: 'strict' })
            Cookies.set('refresh', tokens.refresh, { secure: true, sameSite: 'strict' })

            setAuthenticated(true)

            callback && callback()

            return
        } catch (error) {
            unauthorize()
        }
    }

    const unauthorize = (callback?: () => void) => {
        Cookies.remove('access')
        Cookies.remove('refresh')

        setAuthenticated(false)

        queryClient.clear()

        callback && callback()
    }

    return {
        initialised,
        authenticated,
        authorize,
        unauthorize,
    }
}
