export interface Radius {
    circle: string
    size1: string
    size2: string
    size3: string
    size4: string
    size5: string
    size6: string
    size7: string
    size8: string
    size9: string
    size10: string
}

export const radius: Radius = {
    circle: '50%', // Circle
    size1: '0.125rem', // 2px
    size2: '0.25rem', // 4px
    size3: '0.5rem', // 8px
    size4: '0.625rem', // 10px
    size5: '0.75rem', // 12px
    size6: '1rem', // 16px
    size7: '1.25rem', // 20px
    size8: '1.5rem', // 24px
    size9: '2rem', // 32px
    size10: '3rem', // 48px
} as const
