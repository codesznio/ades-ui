export const ContentItemVariantType = {
    BOX: 'BOX',
    CARD: 'CARD',
    PRIMARY: 'PRIMARY',
} as const

export type ContentItemVariantType = (typeof ContentItemVariantType)[keyof typeof ContentItemVariantType]
