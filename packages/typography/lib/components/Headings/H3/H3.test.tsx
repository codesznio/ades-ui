import { createRef } from 'react'

// Test Utils
import { render, screen } from '@/utils/test.helpers'

// Component
import { H3 as Component } from './H3'

describe('<H3 />', () => {
    it('renders children correctly', () => {
        const testContent = 'Hello, world!'
        render(<Component>{testContent}</Component>)

        const headingElement = screen.getByRole('heading', { name: testContent })
        expect(headingElement).toBeInTheDocument()
        expect(headingElement.tagName).toBe('H3')
    })

    it('forwards ref correctly', () => {
        const ref = createRef<HTMLHeadingElement>()
        render(<Component ref={ref}>Ref forwarding</Component>)

        expect(ref.current).toBeInstanceOf(HTMLHeadingElement)
        expect(ref.current?.tagName).toBe('H3')
        expect(ref.current?.textContent).toBe('Ref forwarding')
    })
})
