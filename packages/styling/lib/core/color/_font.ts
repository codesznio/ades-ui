export interface FontColor {
    primary: string
    secondary: string
    tertiary: string
    inverse: string
    error: string
}

export const fontColor: FontColor = {
    primary: '#101010',
    secondary: '#343434',
    tertiary: '#474747',
    inverse: '#fff',
    error: '#ff0033',
} as const
