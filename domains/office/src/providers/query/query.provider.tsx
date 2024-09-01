import { PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

// Query
import { queryClient } from './query.client'

export function Provider({ children }: PropsWithChildren) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
