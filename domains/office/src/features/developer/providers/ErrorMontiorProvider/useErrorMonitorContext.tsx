import { useContext } from 'react'

// Context
import { ErrorMonitorContext } from './ErrorMonitor.context'

export function useErrorMonitorContext() {
    const context = useContext(ErrorMonitorContext)

    if (!context) {
        throw new Error('Context must be used within an Provider')
    }

    return context
}
