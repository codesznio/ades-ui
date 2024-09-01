import { ReactNode, forwardRef } from 'react'

// Components
import { H1 } from '@/components/Headings'
import { P } from '@/components/P'

// Styling
import { Layout } from './ContentHeaderHeroSecondary.styled'

// Types
import { ContentAlignType } from '@/types'

export interface ContentHeaderHeroSecondaryProps {
    config?: {
        align?: ContentAlignType
    }
    content: {
        leading?: ReactNode
        heading: string
        supporting: string
    }
}

export const ContentHeaderHeroSecondary = forwardRef<HTMLDivElement, ContentHeaderHeroSecondaryProps>(function Base(
    { config = {}, content, ...rest },
    ref,
) {
    const { align = ContentAlignType.CENTER } = config

    return (
        <Layout.Root ref={ref} $align={align} {...rest}>
            <Layout.Inner $align={align}>
                {content.leading}

                <Layout.Content>
                    <H1 size="LEVEL3" weight="SEMIBOLD">
                        {content.heading}
                    </H1>

                    <P color="SECONDARY" size="XL">
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
