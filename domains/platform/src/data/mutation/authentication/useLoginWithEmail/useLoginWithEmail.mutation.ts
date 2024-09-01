import { useMutation } from '@tanstack/react-query'
import { Api } from '@ades/types'
import { AuthenticationApi } from '@/data/services/authentication-service'
import { authenticationKeys } from '../_authentication.keys'

export function useLoginWithEmailMutation() {
    return useMutation<Api.Response<Api.Tokens>, Api.CustomError, Api.EmailLoginParams>({
        mutationFn: (dto: Api.EmailLoginParams) => AuthenticationApi.login(dto),
        mutationKey: authenticationKeys.emailLogin(),
        retry: false,
    })
}
