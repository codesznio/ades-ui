export const ContentIconRadiusType = {
    CIRCLE: 'CIRCLE',
    ROUNDED: 'ROUNDED',
    SQUARE: 'SQUARE',
} as const

export type ContentIconRadiusType = (typeof ContentIconRadiusType)[keyof typeof ContentIconRadiusType]
