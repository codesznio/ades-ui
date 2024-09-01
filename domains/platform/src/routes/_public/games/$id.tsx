import { createFileRoute } from '@tanstack/react-router'

import { GameContainer } from '@/containers/GameContainer'
import { GameProvider } from '@/containers/GameContainer/GameProvider'

export const Route = createFileRoute('/_public/games/$id')({
    component: () => (
        <GameProvider>
            <GameContainer />
        </GameProvider>
    ),
})
