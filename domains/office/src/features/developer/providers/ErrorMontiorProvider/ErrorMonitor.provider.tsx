import { PropsWithChildren } from 'react'

// Authentication
import { ErrorMonitorContext } from './ErrorMonitor.context'

// Hook
import { useErrorMonitor } from './useErrorMonitor'

export function Provider({ children }: PropsWithChildren) {
    return <ErrorMonitorContext.Provider value={useErrorMonitor()}>{children}</ErrorMonitorContext.Provider>
}
