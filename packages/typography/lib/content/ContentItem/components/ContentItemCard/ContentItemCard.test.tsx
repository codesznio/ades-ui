import { createRef } from 'react'
import { render, screen } from '@/utils/test.helpers'

// Component
import { ContentItemCard as Component } from './ContentItemCard'
import { ContentItemProps } from '@/content/ContentItem/ContentItemProps.interface'

describe('<ContentItemCard />', () => {
    const TESTID = 'content-item-card'
    const baseProps: Omit<ContentItemProps, 'variant'> = {
        content: {
            leading: <div data-testid="leading-content">Leading Content</div>,
            heading: 'Test Heading',
            supporting: 'Test Supporting Text',
            trailing: <div data-testid="trailing-content">Trailing Content</div>,
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
        render(<Component {...baseProps} />)

        expect(screen.getByTestId('leading-content')).toBeInTheDocument()
        expect(screen.getByText('Leading Content')).toBeInTheDocument()
    })

    it('renders trailing content when passed', () => {
        render(<Component {...baseProps} />)

        expect(screen.getByTestId('trailing-content')).toBeInTheDocument()
        expect(screen.getByText('Trailing Content')).toBeInTheDocument()
    })

    it('does not render leading content when not passed', () => {
        const { content, ...rest } = baseProps
        render(<Component content={{ ...content, leading: null }} {...rest} />)

        expect(screen.queryByTestId('leading-content')).not.toBeInTheDocument()
    })

    it('does not render trailing content when not passed', () => {
        const { content, ...rest } = baseProps
        render(<Component content={{ ...content, trailing: null }} {...rest} />)

        expect(screen.queryByTestId('trailing-content')).not.toBeInTheDocument()
    })
})
