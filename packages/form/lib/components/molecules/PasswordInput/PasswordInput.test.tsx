import { render, screen, fireEvent } from '@/utils/test.helpers'
import { PasswordInput as Component, PasswordInputProps } from './PasswordInput'
import { createRef } from 'react'

describe('PasswordInput', () => {
    const defaultProps: PasswordInputProps = {
        id: 'test-input',
    }

    const TESTID = 'password'

    it('renders the input', () => {
        render(<Component {...defaultProps} data-testid={TESTID} />)

        const inputElement = screen.getByTestId(TESTID)

        expect(inputElement).toBeInTheDocument()
    })

    it('renders label and hint correctly', () => {
        render(<Component {...defaultProps} data-testid={TESTID} hint="Hint text" label="Password" />)

        const header = screen.getByTestId(TESTID)
        expect(header).toHaveTextContent('Password')
        expect(header).toHaveTextContent('Hint text')
    })

    it('toggles password visibility', () => {
        render(<Component {...defaultProps} data-testid={TESTID} />)

        const el = screen.getByTestId(TESTID)
        const input = el.querySelector('input')
        const trigger = el.querySelector('button')

        // Initially, password is hidden
        expect(input).toHaveAttribute('type', 'password')

        // Click to show password
        fireEvent.click(trigger!)
        expect(input).toHaveAttribute('type', 'text')

        // Click to hide password again
        fireEvent.click(trigger!)
        expect(input).toHaveAttribute('type', 'password')
    })

    it('calls onChange handler when input value changes', () => {
        const handleChange = vi.fn()

        render(<Component {...defaultProps} data-testid={TESTID} onChange={handleChange} />)

        const el = screen.queryByTestId(TESTID)
        const input = el?.querySelector('input')
        fireEvent.change(input!, { target: { value: 'new password' } })

        expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it('renders error message correctly', () => {
        render(
            <Component
                {...defaultProps}
                data-testid={TESTID}
                error="Error message"
                help="Help message"
                id="password"
            />,
        )

        const error = screen.queryByText('Error message')

        expect(error).toBeInTheDocument()
    })

    it('renders help message correctly', () => {
        render(<Component {...defaultProps} data-testid={TESTID} help="Help message" id="password" />)

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
        const input = el.querySelector('input')

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
        const input = el.querySelector('input')

        expect(input).toHaveAttribute('autocapitalize', 'on')
        expect(input).toHaveAttribute('autocomplete', 'on')
        expect(input).toHaveAttribute('autocorrect', 'on')
    })
})
