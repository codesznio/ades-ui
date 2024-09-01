export const FontWeightType = {
    REGULAR: 'REGULAR',
    MEDIUM: 'MEDIUM',
    SEMIBOLD: 'SEMIBOLD',
    BOLD: 'BOLD',
    INHERIT: 'INHERIT',
} as const

export type FontWeightType = (typeof FontWeightType)[keyof typeof FontWeightType]
