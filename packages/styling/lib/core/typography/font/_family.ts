export interface FontFamily {
    primary: string
    brand: string
}

export const fontFamily: FontFamily = {
    primary: `'Inter', system-ui, Arial, sans-serif;`,
    brand: `'Payback', Arial, sans-serif;`,
} as const
