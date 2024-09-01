import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected')({
    beforeLoad: ({ context }) => {
        if (!context.authentication.authenticated) {
            throw redirect({ to: '/login' })
        }
    },
})
