export const FlexDirectionType = {
    COLUMN: 'COLUMN',
    ROW: 'ROW',
} as const

export type FlexDirectionType = (typeof FlexDirectionType)[keyof typeof FlexDirectionType]
