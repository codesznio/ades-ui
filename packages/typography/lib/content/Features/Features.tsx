import { ReactNode, forwardRef } from 'react'

// Styling
import { Layout } from './Features.styled'

// Components
import { ContentHeader } from '@/content/ContentHeader/ContentHeader'
import { ContentItemGrid } from '@/content/ContentItemGrid/ContentItemGrid'

// Types
import { ContentAlignType, GridColumnType } from '@/types'
import { ContentItemVariantType } from '@/content/ContentItem/ContentItemVariant.type'
import { ContentItemProps } from '@/content/ContentItem/ContentItemProps.interface'

export interface FeaturesProps {
    config?: {
        align?: ContentAlignType
        columns?: GridColumnType
        variant?: ContentItemVariantType
    }
    content: {
        leading?: ReactNode
        heading: string
        supporting: string
        items: ContentItemProps[]
    }
}

export const Features = forwardRef<HTMLDivElement, FeaturesProps>(function Base(
    { config = {}, content, ...rest },
    ref,
) {
    const { align = 'CENTER', variant = 'PRIMARY' } = config

    return (
        <Layout.Root ref={ref} {...rest}>
            <Layout.Inner>
                <ContentHeader
                    config={{ align }}
                    content={{ heading: content.heading, leading: content.leading, supporting: content.supporting }}
                />
                <ContentItemGrid config={{ align, variant }} content={{ items: content.items }} />
            </Layout.Inner>
        </Layout.Root>
    )
})
