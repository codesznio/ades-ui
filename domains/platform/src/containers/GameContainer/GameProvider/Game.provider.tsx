import { PropsWithChildren } from 'react'

// Hook
import { useGame } from './useGame'
import { GameContext } from './Game.context'

export function GameProvider({ children }: PropsWithChildren) {
    return <GameContext.Provider value={useGame()}>{children}</GameContext.Provider>
}
