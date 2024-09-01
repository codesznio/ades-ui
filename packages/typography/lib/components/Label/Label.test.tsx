import { createRef } from 'react'

// Test Utils
import { render, screen } from '@/utils/test.helpers'

// Component
import { Label } from './Label'

describe('<Label />', () => {
    it('renders with children correctly', () => {
        const testMessage = 'Test Message'
        render(<Label htmlFor="id">{testMessage}</Label>)

        expect(screen.getByText(testMessage)).toBeInTheDocument()
    })

    it('can be referenced using a ref', () => {
        const ref = createRef<HTMLLabelElement>()
        render(
            <Label ref={ref} htmlFor="id">
                Ref Test
            </Label>,
        )

        expect(ref.current).toBeInstanceOf(HTMLLabelElement)
        expect(ref.current?.textContent).toBe('Ref Test')
    })
})
