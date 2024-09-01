import { createRef } from 'react'
import { render, screen } from '@/utils/test.helpers'

// Icons
import { RiNotionFill } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import { FaSlack } from 'react-icons/fa6'
import { FaIntercom } from 'react-icons/fa'
import { SiJirasoftware } from 'react-icons/si'
import { AiFillDropboxCircle } from 'react-icons/ai'

// Component
import { ContentIconGrid as Component, ContentIconGridProps } from './ContentIconGrid'

describe('<ContentIconGrid />', () => {
    const TESTID = 'content-icon-grid'
    const baseProps: ContentIconGridProps = {
        icons: [
            <RiNotionFill key={1} />,
            <FcGoogle key={2} />,
            <FaSlack key={3} />,
            <FaIntercom key={4} />,
            <SiJirasoftware key={5} />,
            <AiFillDropboxCircle key={6} />,
        ],
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
})
