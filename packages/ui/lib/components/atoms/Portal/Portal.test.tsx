// Test Utils
import { render, screen } from '@/utils/test.helpers'

// Component
import { Portal } from './Portal'

describe('<Portal />', () => {
    it('renders children into a new div appended to document.body', () => {
        render(
            <Portal>
                <div data-testid="inner">Test content</div>
            </Portal>,
        )
        expect(screen.getByTestId('inner')).toBeInTheDocument()
    })

    it('removes the created div from document.body on unmount', () => {
        const { unmount } = render(
            <Portal>
                <div data-testid="inner">Test content</div>
            </Portal>,
        )
        const el = screen.getByTestId('inner')

        expect(el).toBeInTheDocument()

        unmount()

        expect(el).not.toBeInTheDocument()
    })

    it('assigns and clears ref correctly', () => {
        const ref = { current: null }
        const { unmount } = render(<Portal ref={ref}>Test content</Portal>)

        expect(ref.current).toBeInstanceOf(HTMLDivElement)
        expect(document.body.contains(ref.current)).toBe(true)

        unmount()

        expect(ref.current).toBeNull()
    })
})
