import { Api } from '@ades/types'

// Data
import { HttpService } from '@/data/services/http-service/http.service'

export class DeveloperService extends HttpService {
    public async list(): Promise<Api.Response<Api.Error[]>> {
        const response = await this._instance.get(`/errors`)

        return response.data
    }
}
