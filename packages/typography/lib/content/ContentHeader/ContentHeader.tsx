import { ReactNode, forwardRef } from 'react'

// Types
import { ContentAlignType } from '@/types'
import { ContentHeaderSizeType } from './ContentHeaderSize.type'

// Components
import {
    ContentHeaderHero,
    ContentHeaderHeroSecondary,
    ContentHeaderPrimary,
    ContentHeaderSecondary,
} from './components'

export interface ContentHeaderProps {
    config?: {
        align?: ContentAlignType
    }
    content: {
        leading?: ReactNode
        heading: string
        supporting: string
    }
    size?: ContentHeaderSizeType
}

export const ContentHeader = forwardRef<HTMLDivElement, ContentHeaderProps>(function Base(
    { config, content, size, ...rest },
    ref,
) {
    switch (size) {
        case ContentHeaderSizeType.HERO:
            return <ContentHeaderHero ref={ref} config={config} content={content} {...rest} />
        case ContentHeaderSizeType.HERO_SECONDARY:
            return <ContentHeaderHeroSecondary ref={ref} config={config} content={content} {...rest} />
        case ContentHeaderSizeType.PRIMARY:
            return <ContentHeaderPrimary ref={ref} config={config} content={content} {...rest} />
        case ContentHeaderSizeType.SECONDARY:
        default:
            return <ContentHeaderSecondary ref={ref} {...rest} config={config} content={content} />
    }
})
