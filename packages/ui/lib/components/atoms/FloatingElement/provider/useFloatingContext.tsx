import { useContext } from 'react'

// Context
import { FloatingContext } from './FloatingContext'

export function useFloatingContext() {
    return useContext(FloatingContext)
}
