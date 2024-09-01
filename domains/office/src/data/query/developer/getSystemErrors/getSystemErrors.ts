import { DeveloperApi } from '@/data/services'
import { queryOptions } from '@tanstack/react-query'
import { queryKeys } from '../../query.keys'

export function getSystemErrors() {
    return queryOptions({
        queryKey: queryKeys.developer.errors(),
        queryFn: () => DeveloperApi.list(),
        refetchOnWindowFocus: false,
    })
}
