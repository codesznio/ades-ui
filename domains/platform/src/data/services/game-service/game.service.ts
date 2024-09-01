// Packages
import { Api } from '@ades/types'

// Data
import { HttpService } from '../http-service'

export class GameService extends HttpService {
    public async join(): Promise<Api.Response<Api.GameInterface>> {
        const response = await this._instance.post(`/games/join`, {})

        return response.data
    }
}
