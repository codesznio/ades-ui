export const Theme = {
    DARK: 'DARK',
    LIGHT: 'LIGHT',
} as const

export type Theme = (typeof Theme)[keyof typeof Theme]
