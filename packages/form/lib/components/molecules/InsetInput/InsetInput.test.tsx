import { createRef } from 'react'
import { screen, render, fireEvent } from '@/utils/test.helpers'

// Components
import { InsetInput as Component, InsetInputProps } from './InsetInput'

describe('<InsetInput />', () => {
    const TESTID = 'input'

    const defaultProps: InsetInputProps = {
        id: 'test-input',
        label: 'Label',
    }

    it('renders the input with correct props', () => {
        render(<Component {...defaultProps} data-testid={TESTID} placeholder="Enter text" />)

        const inputElement = screen.getByPlaceholderText('Enter text')

        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveAttribute('id', 'test-input')
    })

    it('calls onChange when input value changes', () => {
        const handleChange = vi.fn()

        render(<Component {...defaultProps} data-testid={TESTID} onChange={handleChange} />)

        const el = screen.getByTestId(TESTID)
        const input = el.querySelector('input')

        fireEvent.change(input!, { target: { value: 'new value' } })

        expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it('handles disabled state correctly', () => {
        render(<Component {...defaultProps} data-testid={TESTID} disabled={true} />)
        const el = screen.getByTestId(TESTID)
        const input = el.querySelector('input')

        expect(input).toBeDisabled()
    })

    it('can be referenced using a ref', () => {
        const ref = createRef<HTMLDivElement>()
        render(<Component ref={ref} {...defaultProps} data-testid={TESTID} />)

        expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
})
