export const developerKeys = {
    all: ['developer'] as const,
    errors: () => [...developerKeys.all, 'errors'],
} as const

export const queryKeys = {
    developer: developerKeys,
} as const
