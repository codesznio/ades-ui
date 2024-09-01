export interface HeadingSize {
    LEVEL1: string
    LEVEL2: string
    LEVEL3: string
    LEVEL4: string
    LEVEL5: string
    LEVEL6: string
}

export const headingSize: HeadingSize = {
    LEVEL1: '4.5rem',
    LEVEL2: '3.75rem',
    LEVEL3: '3rem', // 48px
    LEVEL4: '2.25rem', // 36px
    LEVEL5: '1.875rem', // 30px
    LEVEL6: '1.5rem',
} as const
