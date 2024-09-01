export const FloatingMountType = {
    X: 'X',
    Y: 'Y',
} as const

export type FloatingMountType = (typeof FloatingMountType)[keyof typeof FloatingMountType]
