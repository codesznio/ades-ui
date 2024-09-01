import { render, screen } from '@/utils/test.helpers'

// Component
import { Li as Component } from './Li'

describe('<Li />', () => {
    const renderComponent = () => {
        return render(
            <ul>
                <Component>Item 1</Component>
                <Component>Item 2</Component>
                <Component>Item 3</Component>
            </ul>,
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
        render(<Component ref={ref}>Item 1</Component>)
        expect(ref.current).not.toBeNull()
    })
})
