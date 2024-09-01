import { LobbyContainer } from '@/containers'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/games/')({
    component: LobbyContainer,
})
