import { createRef } from 'react'

// Testing
import { render, screen } from '@/utils/test.helpers'

// Component
import { Chip as Component, ChipProps } from './Chip'

// Types
import { ChipRadiusType } from './ChipRadius.type'

describe('<Chip />', () => {
    const props: ChipProps = {
        label: 'Test Label',
        config: {
            palette: {
                background: 'transparent',
                border: 'transparent',
                font: 'inherit',
            },
            radius: ChipRadiusType.L,
        },
    }

    it('renders the label correctly', () => {
        render(<Component data-testid="chip" {...props} />)

        const rootElement = screen.getByTestId('chip')
        expect(rootElement).toHaveTextContent('Test Label')
    })

    it('renders leading element if provided', () => {
        render(<Component data-testid="chip" {...props} leading={<span>Leading</span>} />)

        const leadingElement = screen.getByText('Leading')
        expect(leadingElement).toBeInTheDocument()
    })

    it('renders trailing element if provided', () => {
        render(<Component data-testid="chip" {...props} trailing={<span>Trailing</span>} />)

        const trailingElement = screen.getByText('Trailing')
        expect(trailingElement).toBeInTheDocument()
    })

    it('can be referenced using a ref', () => {
        const ref = createRef<HTMLDivElement>()
        render(<Component {...props} ref={ref} />)

        expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
})
