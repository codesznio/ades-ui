import { ThemeInterface } from '@ades/styling'

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeInterface {}
}
