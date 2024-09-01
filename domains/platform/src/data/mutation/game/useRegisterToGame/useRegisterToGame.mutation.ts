import { useMutation } from '@tanstack/react-query'

// Types
import { Api } from '@ades/types'

// Data
import { GameApi } from '@/data/services/game-service/game.api'
import { mutationKeys } from '../../keys'

export function useRegisterToGame() {
    return useMutation<Api.Response<Api.GameInterface>, Api.CustomError, Record<string, never>>({
        mutationFn: () => GameApi.join(),
        mutationKey: mutationKeys.game.join(),
        retry: false,
    })
}
