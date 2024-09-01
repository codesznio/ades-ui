import { Theme } from '@/types'

export interface ThemeContextInterface {
    theme: Theme
    change: (theme: Theme) => void
}
