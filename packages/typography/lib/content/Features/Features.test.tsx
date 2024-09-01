import { createRef } from 'react'
import { render, screen } from '@/utils/test.helpers'

// Component
import { Features as Component, FeaturesProps } from './Features'

describe('<Features />', () => {
    const TESTID = 'features-component'
    const baseProps: FeaturesProps = {
        content: {
            heading: 'Test Heading',
            supporting: 'Test Supporting Text',
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

    it('renders heading and supporting text correctly', () => {
        render(<Component {...baseProps} />)
        expect(screen.getByText(baseProps.content.heading)).toBeInTheDocument()
        expect(screen.getByText(baseProps.content.supporting)).toBeInTheDocument()
    })

    it('renders leading content when passed', () => {
        const props = {
            ...baseProps,
            content: {
                ...baseProps.content,
                leading: <div data-testid="leading-content">Leading Content</div>,
            },
        }
        render(<Component {...props} />)
        expect(screen.getByTestId('leading-content')).toBeInTheDocument()
        expect(screen.getByText('Leading Content')).toBeInTheDocument()
    })

    it('renders content items correctly', () => {
        render(<Component {...baseProps} />)
        baseProps.content.items.forEach((item) => {
            expect(screen.getByText(item.content.heading)).toBeInTheDocument()
            expect(screen.getByText(item.content.supporting)).toBeInTheDocument()
        })
    })
})
