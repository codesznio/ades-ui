import { createRef } from 'react'

// Component
import { Switch as Component } from './Switch'

// Test Utils
import { screen, render, fireEvent } from '@/utils/test.helpers'

describe('<Switch />', () => {
    it('renders correctly', () => {
        render(<Component checked={false} data-testid="switch" onClick={() => null} />)
        const el = screen.getByTestId('switch')

        expect(el).toBeInTheDocument()
    })

    it('can be referenced using a ref', () => {
        const ref = createRef<HTMLDivElement>()
        render(<Component ref={ref} checked={false} onClick={() => null} />)

        expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('handles checked state correctly', () => {
        render(<Component checked={true} data-testid="switch" onClick={() => null} />)
        const el = screen.getByTestId('switch')
        const toggle = el.querySelector('input[type="checkbox"]')

        expect(toggle).toBeChecked()
    })

    it('calls onClick when clicked', () => {
        const handleClick = vi.fn()
        render(<Component checked={false} data-testid="switch" onClick={handleClick} />)
        const el = screen.getByTestId('switch')
        const toggle = el.querySelector('input[type="checkbox"]')

        fireEvent.click(toggle as Element)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})
