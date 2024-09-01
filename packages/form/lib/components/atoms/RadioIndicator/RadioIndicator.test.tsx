import { render, screen } from '@/utils/test.helpers'

// Component
import { RadioIndicator as Component } from './RadioIndicator'

describe('RadioIndicator', () => {
    const defaultProps = {
        checked: false,
    }

    const TESTID = 'radio-indicator'

    it('renders without crashing', () => {
        render(<Component {...defaultProps} data-testid={TESTID} />)

        const rootElement = screen.getByTestId(TESTID)

        expect(rootElement).toBeInTheDocument()
    })

    it('renders a child element when checked', () => {
        render(<Component {...defaultProps} checked={true} data-testid={TESTID} />)

        const rootElement = screen.getByTestId(TESTID)
        const childElement = rootElement.querySelector(':scope > *')

        expect(childElement).toBeInTheDocument()
    })

    it('renders no elements when unchecked', () => {
        render(<Component {...defaultProps} checked={false} data-testid={TESTID} />)

        const rootElement = screen.getByTestId(TESTID)
        const childElement = rootElement.querySelector(':scope > *')

        expect(childElement).not.toBeInTheDocument()
    })

    it('passes ref to the root element', () => {
        const ref = { current: null }
        render(<Component {...defaultProps} ref={ref} />)

        expect(ref.current).not.toBeNull()
    })
})
