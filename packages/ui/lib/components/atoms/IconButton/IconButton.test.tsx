import { createRef } from 'react'

// Test Utils
import { fireEvent, render, screen } from '@/utils/test.helpers'

// Component
import { IconButton as Component } from './IconButton'

describe('<IconButton />', () => {
    it('renders correctly', () => {
        render(<Component data-testid="button" onClick={() => null} />)
        const buttonElement = screen.getByTestId('button')

        expect(buttonElement).toBeInTheDocument()
    })

    it('calls the onClick prop when clicked', async () => {
        const handleClick = vi.fn()
        render(<Component data-testid="button" onClick={handleClick} />)
        const buttonElement = screen.getByTestId('button')
        fireEvent.click(buttonElement)

        expect(handleClick).toHaveBeenCalledTimes(1)
    })
    it('can be referenced using a ref', () => {
        const ref = createRef<HTMLButtonElement>()
        render(<Component ref={ref} data-testid="button" onClick={() => null} />)

        expect(ref.current).toBeInstanceOf(HTMLButtonElement)
        expect(ref.current).toHaveAttribute('data-testid', 'button')
    })
})
