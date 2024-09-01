import { createRef } from 'react'

// Test Utils
import { render, screen } from '@/utils/test.helpers'

// Component
import { InputRow as Component } from './InputRow'

describe('<InputRow />', () => {
    it('renders with children correctly', () => {
        render(
            <Component data-testid="row">
                <div>Input 1</div>
                <div>Input 2</div>
            </Component>,
        )

        expect(screen.getByTestId('row')).toBeInTheDocument()
    })

    it('can be referenced using a ref', () => {
        const ref = createRef<HTMLDivElement>()
        render(<Component ref={ref}>Ref Test</Component>)

        expect(ref.current).toBeInstanceOf(HTMLDivElement)
        expect(ref.current?.textContent).toBe('Ref Test')
    })
})
