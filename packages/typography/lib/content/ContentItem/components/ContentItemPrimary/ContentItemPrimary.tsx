import { forwardRef } from 'react'

// Components
import { P } from '@/components/P'

// Styling
import { Layout } from './ContentItemPrimary.styled'

// Types
import { ContentAlignType, FlexDirectionType } from '@/types'
import { ContentItemProps } from '@/content/ContentItem/ContentItemProps.interface'

export const ContentItemPrimary = forwardRef<HTMLDivElement, Omit<ContentItemProps, 'variant'>>(function Base(
    { config = {}, content, ...rest },
    ref,
) {
    const { align = ContentAlignType.LEFT, direction = FlexDirectionType.COLUMN } = config

    return (
        <Layout.Root ref={ref} $align={align} $direction={direction} {...rest}>
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
