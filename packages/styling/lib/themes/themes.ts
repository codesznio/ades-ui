import { ThemeInterface } from '@/types/theme.interface'

// Themes
import { dark } from './dark'
import { light } from './light'

// Keys
import { Theme } from '@/types/theme.keys'

export const Themes: { [K in Theme]: ThemeInterface } = {
    [Theme.DARK]: dark,
    [Theme.LIGHT]: light,
}
