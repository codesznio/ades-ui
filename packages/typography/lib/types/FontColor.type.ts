export const FontColorType = {
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
    TERTIARY: 'TERTIARY',
    INHERIT: 'INHERIT',
    INVERSE: 'INVERSE',
    ERROR: 'ERROR',
} as const

export type FontColorType = (typeof FontColorType)[keyof typeof FontColorType]
