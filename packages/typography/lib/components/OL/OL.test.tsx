import { render, screen } from '@/utils/test.helpers'

// Component
import { OL as Component, OLProps } from './OL'

describe('<OL />', () => {
    const renderComponent = (props: Partial<OLProps> = {}) => {
        return render(
            <Component {...props}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </Component>,
        )
    }

    it('should render without crashing', () => {
        renderComponent()
        expect(screen.getByText('Item 1')).toBeInTheDocument()
        expect(screen.getByText('Item 2')).toBeInTheDocument()
        expect(screen.getByText('Item 3')).toBeInTheDocument()
    })

    it('should forward ref correctly', () => {
        const ref = { current: null }
        render(
            <Component ref={ref}>
                <li>Item 1</li>
            </Component>,
        )
        expect(ref.current).not.toBeNull()
    })
})
