import { createRef } from 'react'

// Test
import { render, screen } from '@/utils/test.helpers'

// Component
import { FloatingArrow as Component, FloatingArrowProps } from './FloatingArrow'

describe('FloatingArrow Component', () => {
    const TESTID = 'floating'
    const renderComponent = (props: Partial<FloatingArrowProps> = {}) => {
        return render(
            <Component {...props} data-testid={TESTID}>
                <div>Test Child</div>
            </Component>,
        )
    }

    it('should render without crashing', () => {
        renderComponent()
        expect(screen.getByText('Test Child')).toBeInTheDocument()
    })

    it('can be referenced using a ref', () => {
        const ref = createRef<HTMLDivElement>()

        render(
            <Component ref={ref} anchor="TOP" data-testid={TESTID}>
                <div>Test Child</div>
            </Component>,
        )

        expect(ref.current).toBeInstanceOf(HTMLDivElement)
        expect(ref.current?.textContent).toBe('Test Child')
    })
})
