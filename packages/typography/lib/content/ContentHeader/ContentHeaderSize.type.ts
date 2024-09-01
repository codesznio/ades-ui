export const ContentHeaderSizeType = {
    HERO: 'HERO',
    HERO_SECONDARY: 'HERO_SECONDARY',
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
} as const

export type ContentHeaderSizeType = (typeof ContentHeaderSizeType)[keyof typeof ContentHeaderSizeType]
