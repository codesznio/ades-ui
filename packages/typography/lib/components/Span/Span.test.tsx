import { createRef } from 'react'

// Test Utils
import { render, screen } from '@/utils/test.helpers'

// Component
import { Span as Component } from './Span'

describe('<Span />', () => {
    it('renders with children correctly', () => {
        const testMessage = 'Test Message'
        render(<Component>{testMessage}</Component>)

        expect(screen.getByText(testMessage)).toBeInTheDocument()
    })

    it('can be referenced using a ref', () => {
        const ref = createRef<HTMLSpanElement>()
        render(<Component ref={ref}>Ref Test</Component>)

        expect(ref.current).toBeInstanceOf(HTMLSpanElement)
        expect(ref.current?.textContent).toBe('Ref Test')
    })
})
