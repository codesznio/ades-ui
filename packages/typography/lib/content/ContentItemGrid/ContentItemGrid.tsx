import { forwardRef } from 'react'

// Styling
import { Layout } from './ContentItemGrid.styled'

// Components
import { ContentItem } from '@/content/ContentItem/ContentItem'

// Types
import { ContentAlignType, FlexDirectionType } from '@/types'
import { GridColumnType } from '@/types/GridColumns.type'
import { ContentItemVariantType } from '@/content/ContentItem/ContentItemVariant.type'
import { ContentItemProps } from '@/content/ContentItem/ContentItemProps.interface'

export interface ContentItemGridProps {
    config?: {
        align?: ContentAlignType
        columns?: GridColumnType
        direction?: FlexDirectionType
        variant?: ContentItemVariantType
    }
    content: {
        items: ContentItemProps[]
    }
}

export const ContentItemGrid = forwardRef<HTMLDivElement, ContentItemGridProps>(function Base(
    { config = {}, content, ...rest },
    ref,
) {
    const { align = 'CENTER', columns = 3, direction = 'COLUMN', variant = 'PRIMARY' } = config

    return (
        <Layout.Root ref={ref} {...rest}>
            <Layout.Inner $align={align} $columns={columns}>
                {content.items.map((item, idx) => {
                    return (
                        <ContentItem
                            key={idx}
                            config={{ align, direction }}
                            content={{ ...item.content }}
                            variant={variant}
                        />
                    )
                })}
            </Layout.Inner>
        </Layout.Root>
    )
})
