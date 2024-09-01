import { createContext } from 'react'

// Types
import { ThemeContextInterface } from './ThemeContext.interface'
import { Theme } from '@/types'

export const ThemeContext = createContext<ThemeContextInterface>({
    theme: Theme.LIGHT,
    change: () => null,
})
