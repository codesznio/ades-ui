import { createRef } from 'react'

// Test Utils
import { render, screen } from '@/utils/test.helpers'

// Component
import { P } from './P'

describe('<P />', () => {
    it('renders with children correctly', () => {
        const testMessage = 'Test Message'
        render(<P>{testMessage}</P>)

        expect(screen.getByText(testMessage)).toBeInTheDocument()
    })

    it('can be referenced using a ref', () => {
        const ref = createRef<HTMLParagraphElement>()
        render(<P ref={ref}>Ref Test</P>)

        expect(ref.current).toBeInstanceOf(HTMLParagraphElement)
        expect(ref.current?.textContent).toBe('Ref Test')
    })
})
