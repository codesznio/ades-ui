export const FloatingAnimationType = {
    FADE: 'FADE',
    SLIDE: 'SLIDE',
    NONE: 'NONE',
} as const

export type FloatingAnimationType = (typeof FloatingAnimationType)[keyof typeof FloatingAnimationType]
