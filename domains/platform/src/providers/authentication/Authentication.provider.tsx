import { PropsWithChildren } from 'react'

// Authentication
import { AuthenticationContext } from './Authentication.context'

// Hook
import { useAuthentication } from './useAuthentication'

export function Provider({ children }: PropsWithChildren) {
    return <AuthenticationContext.Provider value={useAuthentication()}>{children}</AuthenticationContext.Provider>
}
