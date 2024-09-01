import { render, screen, fireEvent } from '@/utils/test.helpers'
import { HeroButton } from './HeroButton'
import { createRef } from 'react'

describe('Button', () => {
    it('renders children correctly', () => {
        render(
            <HeroButton>
                <span data-testid="child">Click me</span>
            </HeroButton>,
        )

        expect(screen.getByTestId('child')).toBeInTheDocument()
    })

    it('calls onClick handler when clicked', () => {
        const handleClick = vi.fn()
        render(
            <HeroButton data-testid="button" onClick={handleClick}>
                Clickable Button
            </HeroButton>,
        )

        const button = screen.getByTestId('button')
        fireEvent.click(button)

        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('passes ref to the button element', () => {
        const ref = createRef<HTMLButtonElement>()

        render(
            <HeroButton ref={ref} data-testid="button">
                Ref Button
            </HeroButton>,
        )

        expect(ref.current).not.toBeNull()
        expect(ref.current).toBeInstanceOf(HTMLButtonElement)
        expect(ref.current?.textContent).toBe('Ref Button')
    })
})
