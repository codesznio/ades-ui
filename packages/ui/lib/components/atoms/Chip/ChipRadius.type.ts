export const ChipRadiusType = {
    L: 'L',
    M: 'M',
    S: 'S',
} as const

export type ChipRadiusType = (typeof ChipRadiusType)[keyof typeof ChipRadiusType]
