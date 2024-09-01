export const authenticationKeys = {
    all: ['authentication'] as const,
    emailLogin: () => [...authenticationKeys.all, 'email-login'],
} as const
