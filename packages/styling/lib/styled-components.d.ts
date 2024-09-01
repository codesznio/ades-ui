import { ThemeInterface } from '@/types'

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeInterface {}
}
