import { createRef } from 'react'
import { render, screen, fireEvent } from '@/utils/test.helpers'

import { Textarea as Component, TextareaProps } from './Textarea'

describe('<Textarea />', () => {
    const defaultProps: TextareaProps = {
        id: 'test-input',
    }

    const TESTID = 'password'

    it('renders the textarea', () => {
        render(<Component {...defaultProps} data-testid={TESTID} />)

        const el = screen.getByTestId(TESTID)

        expect(el).toBeInTheDocument()
    })

    it('renders label and hint correctly', () => {
        render(<Component {...defaultProps} data-testid={TESTID} hint="Hint text" label="Label" />)

        const header = screen.getByTestId(TESTID)
        expect(header).toHaveTextContent('Label')
        expect(header).toHaveTextContent('Hint text')
    })

    it('calls onChange handler when input value changes', () => {
        const handleChange = vi.fn()

        render(<Component {...defaultProps} data-testid={TESTID} onChange={handleChange} />)

        const el = screen.queryByTestId(TESTID)
        const input = el?.querySelector('textarea')
        fireEvent.change(input!, { target: { value: 'hello' } })

        expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it('renders error message correctly', () => {
        render(<Component {...defaultProps} data-testid={TESTID} error="Error message" />)

        const error = screen.queryByText('Error message')

        expect(error).toBeInTheDocument()
    })

    it('renders help message correctly', () => {
        render(<Component {...defaultProps} data-testid={TESTID} help="Help message" />)

        const help = screen.queryByText('Help message')

        expect(help).toBeInTheDocument()
    })

    it('can be referenced using a ref', () => {
        const ref = createRef<HTMLDivElement>()
        render(<Component ref={ref} {...defaultProps} data-testid={TESTID} />)

        expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('disables the input when disabled prop is set', () => {
        render(<Component {...defaultProps} data-testid={TESTID} disabled={true} />)

        const el = screen.getByTestId(TESTID)
        const input = el.querySelector('textarea')

        expect(input).toBeDisabled()
    })

    it('sets autoCapitalize, autoComplete, autoCorrect attributes correctly', () => {
        render(
            <Component
                {...defaultProps}
                autoCapitalize={true}
                autoComplete={true}
                autoCorrect={true}
                data-testid={TESTID}
            />,
        )

        const el = screen.getByTestId(TESTID)
        const textarea = el.querySelector('textarea')

        expect(textarea).toHaveAttribute('autocapitalize', 'on')
        expect(textarea).toHaveAttribute('autocomplete', 'on')
        expect(textarea).toHaveAttribute('autocorrect', 'on')
    })
})
