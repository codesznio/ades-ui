export const GridColumnType = {
    [1]: 1,
    [2]: 2,
    [3]: 3,
    [4]: 4,
} as const

export type GridColumnType = (typeof GridColumnType)[keyof typeof GridColumnType]
