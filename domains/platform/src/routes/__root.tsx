import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'

// Providers
import { AuthenticationContextInterface } from '@/providers/authentication'

export const Route = createRootRouteWithContext<{
    authentication: AuthenticationContextInterface
    queryClient: QueryClient
}>()({
    component: () => {
        return <Outlet />
    },
})
