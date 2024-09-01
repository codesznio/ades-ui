import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/developer/errors/')({
    component: () => <div>Hello /developer/errors/!</div>,
})
