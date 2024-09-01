import { forwardRef } from 'react'

// Styling
import { Layout } from './ContentItemCard.styled'

// Components
import { P } from '@/components/P'
import { ContentItemProps } from '@/content/ContentItem/ContentItemProps.interface'

export const ContentItemCard = forwardRef<HTMLDivElement, Omit<ContentItemProps, 'variant'>>(function Base(
    { content, ...rest },
    ref,
) {
    return (
        <Layout.Root ref={ref} {...rest}>
            {content.leading}

            <Layout.Inner>
                <Layout.Content>
                    <P size="XL" weight="SEMIBOLD">
                        {content.heading}
                    </P>
                    <P size="M">{content.supporting}</P>
                </Layout.Content>

                {content.trailing}
            </Layout.Inner>
        </Layout.Root>
    )
})
