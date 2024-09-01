// Packages
import { Api } from '@ades/types'

// Data
import { HttpService } from '../http-service'

export class AuthenticationService extends HttpService {
    public async login(dto: Api.EmailLoginParams): Promise<Api.Response<Api.Tokens>> {
        const response = await this._instance.post(`/authentication/email/login`, dto)

        return response.data
    }
}
