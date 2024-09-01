import { createContext } from 'react'

// Interface
import { AuthenticationContextInterface } from './Authentication.interface'

export const AuthenticationContext = createContext<AuthenticationContextInterface | null>(null)
