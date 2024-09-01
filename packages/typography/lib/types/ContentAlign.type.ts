export const ContentAlignType = {
    CENTER: 'CENTER',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
} as const

export type ContentAlignType = (typeof ContentAlignType)[keyof typeof ContentAlignType]
