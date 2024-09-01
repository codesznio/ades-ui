import { createRef } from 'react'

// Test Utils
import { render, screen } from '@/utils/test.helpers'

// Component
import { H2 as Component } from './H2'

describe('<H2 />', () => {
    it('renders children correctly', () => {
        const testContent = 'Hello, world!'
        render(<Component>{testContent}</Component>)

        const headingElement = screen.getByRole('heading', { name: testContent })
        expect(headingElement).toBeInTheDocument()
        expect(headingElement.tagName).toBe('H2')
    })

    it('forwards ref correctly', () => {
        const ref = createRef<HTMLHeadingElement>()
        render(<Component ref={ref}>Ref forwarding</Component>)

        expect(ref.current).toBeInstanceOf(HTMLHeadingElement)
        expect(ref.current?.tagName).toBe('H2')
        expect(ref.current?.textContent).toBe('Ref forwarding')
    })
})
