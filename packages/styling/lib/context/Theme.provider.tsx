import { PropsWithChildren, useState } from 'react'

// Types
import { Theme } from '@/types'
import { ThemeContext } from './ThemeContext'

function useTheme() {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

    return {
        theme,
        change: (theme: Theme) => setTheme(theme),
    }
}

export function Provider({ children }: PropsWithChildren) {
    return <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
}
