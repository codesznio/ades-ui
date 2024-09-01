import { LobbyContainer } from '@/containers'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/games/')({
    component: LobbyContainer,
})
