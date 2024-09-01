// Testing
import { render, screen } from '@/utils/test.helpers'

// Components
import { ContentItem as Component } from './ContentItem'
import { ContentItemBox, ContentItemCard, ContentItemPrimary } from './components'
import { ContentItemProps } from './ContentItemProps.interface'
import { ContentItemVariantType } from './ContentItemVariant.type'

// Mocking the components
vi.mock('./components', () => ({
    ContentItemBox: vi.fn(() => <div data-testid="box" />),
    ContentItemCard: vi.fn(() => <div data-testid="card" />),
    ContentItemPrimary: vi.fn(() => <div data-testid="primary" />),
}))

describe('<ContentItem />', () => {
    const baseProps: Omit<ContentItemProps, 'variant'> = {
        content: {
            leading: <div data-testid="leading-content">Leading Content</div>,
            heading: 'Test Heading',
            supporting: 'Test Supporting Text',
            trailing: <div data-testid="trailing-content">Trailing Content</div>,
        },
    }

    it('renders ContentItemBox when variant is BOX', () => {
        render(<Component {...baseProps} variant={ContentItemVariantType.BOX} />)

        expect(screen.getByTestId('box')).toBeInTheDocument()
        expect(ContentItemBox).toHaveBeenCalledWith(
            expect.objectContaining({
                config: undefined,
                content: baseProps.content,
            }),
            expect.anything(),
        )
    })

    it('renders ContentItemCard when variant is CARD', () => {
        render(<Component {...baseProps} variant={ContentItemVariantType.CARD} />)

        expect(screen.getByTestId('card')).toBeInTheDocument()
        expect(ContentItemCard).toHaveBeenCalledWith(
            expect.objectContaining({
                config: undefined,
                content: baseProps.content,
            }),
            expect.anything(),
        )
    })

    it('renders ContentItemPrimary when variant is PRIMARY', () => {
        render(<Component {...baseProps} variant={ContentItemVariantType.PRIMARY} />)

        expect(screen.getByTestId('primary')).toBeInTheDocument()
        expect(ContentItemPrimary).toHaveBeenCalledWith(
            expect.objectContaining({
                config: undefined,
                content: baseProps.content,
            }),
            expect.anything(),
        )
    })
})
