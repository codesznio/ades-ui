export interface BackgroundColor {
    primary: string
    secondary: string
    tertiary: string
    quaternary: string
    inverse: string
}

export const backgroundColor: BackgroundColor = {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F8F8F8',
    quaternary: '#F4F4F4',
    inverse: '#242424',
} as const
