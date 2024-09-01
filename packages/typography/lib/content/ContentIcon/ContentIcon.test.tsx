import { createRef } from 'react'

// Testing
import { render, screen } from '@/utils/test.helpers'

// Component
import { ContentIcon as Component, ContentIconProps } from './ContentIcon'
import { ContentIconRadiusType } from './ContentIconRadius.type'

describe('<ContentIcon />', () => {
    const props: ContentIconProps = {
        palette: {
            background: 'transparent',
            border: 'transparent',
            color: 'inherit',
        },
        radius: ContentIconRadiusType.ROUNDED,
        size: 'SECONDARY',
    }

    it('renders children correctly', () => {
        render(
            <Component data-testid="contenticon" {...props}>
                Test Child
            </Component>,
        )

        const rootElement = screen.getByTestId('contenticon')
        expect(rootElement).toHaveTextContent('Test Child')
    })

    it('can be referenced using a ref', () => {
        const ref = createRef<HTMLDivElement>()
        render(<Component {...props} ref={ref} />)

        expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
})
