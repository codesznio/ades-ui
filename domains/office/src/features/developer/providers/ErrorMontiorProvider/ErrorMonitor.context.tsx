import { createContext } from 'react'

// Interface
import { ErrorMonitorContextInterface } from './ErrorMonitor.interface'

export const ErrorMonitorContext = createContext<ErrorMonitorContextInterface | null>(null)
