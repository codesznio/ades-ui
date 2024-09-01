export const ContentIconSizeType = {
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
} as const

export type ContentIconSizeType = (typeof ContentIconSizeType)[keyof typeof ContentIconSizeType]
