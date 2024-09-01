import { useContext } from 'react'

// Context
import { GameContext } from './Game.context'

export function useGameContext() {
    const context = useContext(GameContext)

    if (!context) {
        throw new Error('Game must be used within an GamePRovider')
    }

    return context
}
