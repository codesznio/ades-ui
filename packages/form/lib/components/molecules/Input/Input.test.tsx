import { createRef } from 'react'
import { screen, render, fireEvent } from '@/utils/test.helpers'

// Components
import { Input as Component, InputProps } from './Input'

describe('Input Component', () => {
    const defaultProps: InputProps = {
        id: 'test-input',
    }

    it('renders the input with correct props', () => {
        render(<Component {...defaultProps} placeholder="Enter text" />)

        const inputElement = screen.getByPlaceholderText('Enter text')

        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveAttribute('id', 'test-input')
    })

    it('renders label and hint when provided', () => {
        render(<Component {...defaultProps} hint="Test Hint" label="Test Label" />)

        expect(screen.getByText('Test Label')).toBeInTheDocument()
        expect(screen.getByText('Test Hint')).toBeInTheDocument()
    })

    it('calls onChange when input value changes', () => {
        const handleChange = vi.fn()

        render(<Component {...defaultProps} onChange={handleChange} />)

        const inputElement = screen.getByRole('textbox')

        fireEvent.change(inputElement, { target: { value: 'new value' } })
        expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it('displays error message when provided', () => {
        render(<Component {...defaultProps} error="Error message" />)

        expect(screen.getByText('Error message')).toBeInTheDocument()
    })

    it('displays help message when provided', () => {
        render(<Component {...defaultProps} help="Help message" />)

        expect(screen.getByText('Help message')).toBeInTheDocument()
    })

    it('displays only error message when both help and error are provided', () => {
        render(<Component {...defaultProps} error="Error message" help="Help message" />)

        expect(screen.getByText('Error message')).toBeInTheDocument()
        expect(screen.queryByText('Help message')).not.toBeInTheDocument()
    })

    it('handles disabled state correctly', () => {
        render(<Component {...defaultProps} disabled={true} />)
        const inputElement = screen.getByRole('textbox')
        expect(inputElement).toBeDisabled()
    })

    it('can be referenced using a ref', () => {
        const ref = createRef<HTMLDivElement>()
        render(<Component ref={ref} {...defaultProps} />)

        expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
})
