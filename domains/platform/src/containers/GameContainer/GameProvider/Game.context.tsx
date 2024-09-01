import { createContext } from 'react'

// Interface
import { GameContextInterface } from './Game.interface'

export const GameContext = createContext<GameContextInterface | null>(null)
