import { ReactNode, forwardRef } from 'react'

// Components
import { H1 } from '@/components/Headings'
import { P } from '@/components/P'

// Styling
import { Layout } from './ContentHeaderHero.styled'

// Types
import { ContentAlignType } from '@/types'

export interface ContentHeaderHeroProps {
    config?: {
        align?: ContentAlignType
    }
    content: {
        leading?: ReactNode
        heading: string
        supporting: string
    }
}

export const ContentHeaderHero = forwardRef<HTMLDivElement, ContentHeaderHeroProps>(function Base(
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
