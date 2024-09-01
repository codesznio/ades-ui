import { useContext } from 'react'

// Context
import { AuthenticationContext } from './Authentication.context'

export function useAuthenticationContext() {
    const context = useContext(AuthenticationContext)

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context
}
