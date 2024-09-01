export const gameKeys = {
    all: ['game'] as const,
    join: () => [...gameKeys.all, 'join'],
} as const
