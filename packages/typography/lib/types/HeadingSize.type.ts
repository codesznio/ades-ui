export const HeadingSizeType = {
    LEVEL1: 'LEVEL1',
    LEVEL2: 'LEVEL2',
    LEVEL3: 'LEVEL3',
    LEVEL4: 'LEVEL4',
    LEVEL5: 'LEVEL5',
    LEVEL6: 'LEVEL6',
    INHERIT: 'INHERIT',
} as const

export type HeadingSizeType = (typeof HeadingSizeType)[keyof typeof HeadingSizeType]
