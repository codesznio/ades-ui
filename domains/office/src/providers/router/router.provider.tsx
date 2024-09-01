import { RouterProvider as TanstackRouterProvider, createRouter } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

// Query
import { queryClient } from '@/providers/query'
import { useAuthenticationContext } from '@/providers/authentication'

// Config
import { routeTree } from '@/routeTree.gen'

// Containers
import { NotFoundContainer } from '@/containers'

// Set up a Router instance
const router = createRouter({
    routeTree,
    context: {
        authentication: undefined!,
        queryClient,
    },
    defaultPreload: 'intent',
    defaultNotFoundComponent: NotFoundContainer,
})

// Register things for typesafety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

export function Provider() {
    const authentication = useAuthenticationContext()
    const i18n = useTranslation()

    return (
        <>
            {i18n.ready && authentication.initialised && (
                <TanstackRouterProvider context={{ authentication }} router={router} />
            )}
        </>
    )
}
