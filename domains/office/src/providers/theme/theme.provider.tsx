import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

// Styling
import { Reset, Themes, Provider as AppThemeProvider, useThemeContext } from '@ades/styling'

export function Provider({ children }: PropsWithChildren) {
    return (
        <AppThemeProvider>
            <Inner>{children}</Inner>
        </AppThemeProvider>
    )
}

function Inner({ children }: PropsWithChildren) {
    const { theme } = useThemeContext()

    return (
        <ThemeProvider theme={Themes[theme]}>
            <Reset />
            {children}
        </ThemeProvider>
    )
}
