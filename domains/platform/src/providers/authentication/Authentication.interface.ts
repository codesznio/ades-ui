export interface AuthenticationContextInterface {
    initialised: boolean
    authenticated: boolean
    authorize: (tokens: { access: string; refresh: string }, callback?: () => void) => void
    unauthorize: (callback?: () => void) => void
}
