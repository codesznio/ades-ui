import '@testing-library/jest-dom'
import { ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'

interface AllTheProvidersProps {
    children: React.ReactNode
}

const AllTheProviders = ({ children }: AllTheProvidersProps): ReactElement => {
    return <>{children}</>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult =>
    render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
