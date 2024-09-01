import '@testing-library/jest-dom'
import { ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

// Packages
import { Themes } from '@ades/styling'

interface AllTheProvidersProps {
    children: React.ReactNode
}

const AllTheProviders = ({ children }: AllTheProvidersProps): ReactElement => {
    return <ThemeProvider theme={Themes.LIGHT}>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult =>
    render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
