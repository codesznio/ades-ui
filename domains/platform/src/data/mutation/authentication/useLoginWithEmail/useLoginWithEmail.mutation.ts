import { useMutation } from '@tanstack/react-query'

// Types
import { Api } from '@support/models'

// Data
import { LoginApi, loginKeys } from '@/Login/data'

export function useLoginWithEmailMutation() {
    return useMutation<Api.Response<Api.Tokens>, Api.CustomError, Api.EmailLoginParams>({
        mutationFn: (dto: Api.EmailLoginParams) => LoginApi.login(dto),
        mutationKey: loginKeys.login(),
        retry: false,
    })
}
