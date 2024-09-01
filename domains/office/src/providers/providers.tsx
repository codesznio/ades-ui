import { Provider as AuthenticationProvider } from './authentication'
import { Provider as QueryProvider } from './query'
import { Provider as RouterProvider } from './router'
import { Provider as TranslationsProvider } from './translations'
import { Provider as ThemeProvider } from './theme'

export function Providers() {
    return (
        <ThemeProvider>
            <TranslationsProvider>
                <AuthenticationProvider>
                    <QueryProvider>
                        <RouterProvider />
                    </QueryProvider>
                </AuthenticationProvider>
            </TranslationsProvider>
        </ThemeProvider>
    )
}
