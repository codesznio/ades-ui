export interface FontWeight {
    REGULAR: number
    MEDIUM: number
    SEMIBOLD: number
    BOLD: number
    INHERIT: string
}

export const fontWeight: FontWeight = {
    REGULAR: 400,
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700,
    INHERIT: 'inherit',
} as const
