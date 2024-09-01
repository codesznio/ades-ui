import { createFileRoute } from '@tanstack/react-router'

import { GameContainer } from '@/containers/GameContainer'
import { GameProvider } from '@/containers/GameContainer/GameProvider'

export const Route = createFileRoute('/_protected/games/$id')({
    component: () => (
        <GameProvider>
            <GameContainer />
        </GameProvider>
    ),
})
