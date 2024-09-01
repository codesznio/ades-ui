import { createRef } from 'react'

// Testing
import { render, screen } from '@/utils/test.helpers'
import { ContentHeaderSecondary as Component, ContentHeaderSecondaryProps } from './ContentHeaderSecondary'

describe('<ContentSecondaryPrimary />', () => {
    const TESTID = 'header'
    const baseProps: ContentHeaderSecondaryProps = {
        content: {
            heading: 'Test Heading',
            supporting: 'Test Supporting Text',
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

    it('Header and supporting text are rendered correctly', () => {
        render(<Component {...baseProps} />)

        expect(screen.getByText(baseProps.content.heading)).toBeInTheDocument()
        expect(screen.getByText(baseProps.content.supporting)).toBeInTheDocument()
    })

    it('Leading element displays when passed', () => {
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

    it('No leading element displayed when not passed', () => {
        render(<Component {...baseProps} />)

        expect(screen.queryByTestId('leading-content')).not.toBeInTheDocument()
    })
})
