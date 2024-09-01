import { createRef } from 'react'
import { render, screen } from '@/utils/test.helpers'

// Component
import { ContentItemGrid as Component, ContentItemGridProps } from './ContentItemGrid'

describe('<ContentItemGrid />', () => {
    const TESTID = 'content-item-grid'
    const baseProps: ContentItemGridProps = {
        content: {
            items: [
                { content: { heading: 'Item 1', supporting: 'Item 1 Supporting' } },
                { content: { heading: 'Item 2', supporting: 'Item 2 Supporting' } },
            ],
        },
    }

    it('renders correctly', () => {
        render(<Component data-testid={TESTID} {...baseProps} />)
        expect(screen.getByTestId(TESTID)).toBeInTheDocument()
    })

    it('can be referenced using a ref', () => {
        const ref = createRef<HTMLDivElement>()
        render(<Component ref={ref} data-testid={TESTID} {...baseProps} />)
        expect(ref.current).toBeInstanceOf(HTMLDivElement)
        expect(ref.current).not.toBeNull()
    })

    it('renders content items correctly', () => {
        render(<Component {...baseProps} />)
        baseProps.content.items.forEach((item) => {
            expect(screen.getByText(item.content.heading)).toBeInTheDocument()
            expect(screen.getByText(item.content.supporting)).toBeInTheDocument()
        })
    })
})
