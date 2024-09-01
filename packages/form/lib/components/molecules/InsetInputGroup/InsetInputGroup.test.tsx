import { render, screen } from '@/utils/test.helpers'

// Component
import { InsetInputGroup as Component } from './InsetInputGroup'

describe('InsetInputGroup Component', () => {
    it('renders children correctly', () => {
        render(
            <Component>
                <div data-testid="child">Child Component</div>
            </Component>,
        )

        expect(screen.getByTestId('child')).toBeInTheDocument()
        expect(screen.getByTestId('child')).toHaveTextContent('Child Component')
    })

    it('forwards ref to the root element', () => {
        const ref = { current: null }

        render(
            <Component ref={ref}>
                <div>Child Component</div>
            </Component>,
        )

        expect(ref.current).not.toBeNull()
        expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
})
