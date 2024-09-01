import { forwardRef } from 'react'

// Types
import { ContentItemProps } from './ContentItemProps.interface'
import { ContentItemVariantType } from './ContentItemVariant.type'

// Components
import { ContentItemBox, ContentItemCard, ContentItemPrimary } from './components'

export const ContentItem = forwardRef<HTMLDivElement, ContentItemProps>(function Base(
    { config, content, variant = ContentItemVariantType.PRIMARY, ...rest },
    ref,
) {
    switch (variant) {
        case ContentItemVariantType.BOX:
            return <ContentItemBox ref={ref} config={config} content={content} {...rest} />
        case ContentItemVariantType.CARD:
            return <ContentItemCard ref={ref} config={config} content={content} {...rest} />
        case ContentItemVariantType.PRIMARY:
        default:
            return <ContentItemPrimary ref={ref} config={config} content={content} {...rest} />
    }
})
