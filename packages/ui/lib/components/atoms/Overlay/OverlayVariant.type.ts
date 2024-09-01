export const OverlayVariantType = {
    BLUR: 'BLUR',
    DEFAULT: 'DEFAULT',
} as const

export type OverlayVariantType = (typeof OverlayVariantType)[keyof typeof OverlayVariantType]
