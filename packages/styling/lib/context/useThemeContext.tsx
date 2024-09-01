import { useContext } from 'react'

// Context
import { ThemeContext } from './ThemeContext'

export function useThemeContext() {
    return useContext(ThemeContext)
}
