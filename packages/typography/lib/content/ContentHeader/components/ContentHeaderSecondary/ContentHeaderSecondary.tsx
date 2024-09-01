import { ReactNode, forwardRef } from 'react'

// Components
import { H2 } from '@/components/Headings'
import { P } from '@/components/P'

// Styling
import { Layout } from './ContentHeaderSecondary.styled'

// Types
import { ContentAlignType } from '@/types'

export interface ContentHeaderSecondaryProps {
    config?: {
        align?: ContentAlignType
    }
    content: {
        leading?: ReactNode
        heading: string
        supporting: string
    }
}

export const ContentHeaderSecondary = forwardRef<HTMLDivElement, ContentHeaderSecondaryProps>(function Base(
    { config = {}, content, ...rest },
    ref,
) {
    const { align = ContentAlignType.CENTER } = config

    return (
        <Layout.Root ref={ref} $align={align} {...rest}>
            <Layout.Inner $align={align}>
                {content.leading}

                <Layout.Content>
                    <H2 size="LEVEL5" weight="SEMIBOLD">
                        {content.heading}
                    </H2>

                    <P color="SECONDARY" size="L">
                        {content.supporting}
                    </P>
                </Layout.Content>
            </Layout.Inner>
        </Layout.Root>
    )
})

/**
 * Layout Structure:
 *
 * Root: extends the full width of the parent it is dropped inside of, will center the inner div on large screens
 * Inner: provides a max width for the content and a gap between leading element and content
 * Content: contains the main heading and supporting text
 *
 */
