// Testing
import { render, screen } from '@/utils/test.helpers'

// Components
import { ContentHeader } from './ContentHeader'
import {
    ContentHeaderHero,
    ContentHeaderHeroSecondary,
    ContentHeaderPrimary,
    ContentHeaderSecondary,
} from './components'

// Types
import { ContentHeaderSizeType } from './ContentHeaderSize.type'

// Mocking the components
vi.mock('./components', () => ({
    ContentHeaderHero: vi.fn(() => <div data-testid="content-header-hero" />),
    ContentHeaderHeroSecondary: vi.fn(() => <div data-testid="content-header-hero-secondary" />),
    ContentHeaderPrimary: vi.fn(() => <div data-testid="content-header-primary" />),
    ContentHeaderSecondary: vi.fn(() => <div data-testid="content-header-secondary" />),
}))

describe('<ContentHeader />', () => {
    const baseProps = {
        content: {
            heading: 'Test Heading',
            supporting: 'Test Supporting Text',
        },
    }

    it('renders ContentHeaderHero when size is HERO', () => {
        render(<ContentHeader {...baseProps} size={ContentHeaderSizeType.HERO} />)

        expect(screen.getByTestId('content-header-hero')).toBeInTheDocument()
        expect(ContentHeaderHero).toHaveBeenCalledWith(
            expect.objectContaining({
                config: undefined,
                content: baseProps.content,
            }),
            expect.anything(),
        )
    })

    it('renders ContentHeaderHeroSecondary when size is HERO_SECONDARY', () => {
        render(<ContentHeader {...baseProps} size={ContentHeaderSizeType.HERO_SECONDARY} />)

        expect(screen.getByTestId('content-header-hero-secondary')).toBeInTheDocument()
        expect(ContentHeaderHeroSecondary).toHaveBeenCalledWith(
            expect.objectContaining({
                config: undefined,
                content: baseProps.content,
            }),
            expect.anything(),
        )
    })

    it('renders ContentHeaderPrimary when size is PRIMARY', () => {
        render(<ContentHeader {...baseProps} size={ContentHeaderSizeType.PRIMARY} />)

        expect(screen.getByTestId('content-header-primary')).toBeInTheDocument()
        expect(ContentHeaderPrimary).toHaveBeenCalledWith(
            expect.objectContaining({
                config: undefined,
                content: baseProps.content,
            }),
            expect.anything(),
        )
    })

    it('renders ContentHeaderSecondary when size is SECONDARY', () => {
        render(<ContentHeader {...baseProps} size={ContentHeaderSizeType.SECONDARY} />)

        expect(screen.getByTestId('content-header-secondary')).toBeInTheDocument()
        expect(ContentHeaderSecondary).toHaveBeenCalledWith(
            expect.objectContaining({
                config: undefined,
                content: baseProps.content,
            }),
            expect.anything(),
        )
    })
})
