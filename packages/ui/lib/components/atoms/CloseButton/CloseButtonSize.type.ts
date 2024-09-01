export const CloseButtonSizeType = {
    XS: 'XS',
    S: 'S',
    M: 'M',
    L: 'L',
} as const

export type CloseButtonSizeType = (typeof CloseButtonSizeType)[keyof typeof CloseButtonSizeType]
