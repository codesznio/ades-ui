export const BodySizeType = {
    XL: 'XL',
    L: 'L',
    M: 'M',
    S: 'S',
    XS: 'XS',
    INHERIT: 'INHERIT',
} as const

export type BodySizeType = (typeof BodySizeType)[keyof typeof BodySizeType]
