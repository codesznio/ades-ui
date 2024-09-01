import { ReactNode } from 'react'

// Types
import { ContentAlignType, FlexDirectionType } from '@/types'
import { ContentItemVariantType } from './ContentItemVariant.type'

export interface ContentItemContentInterface {
    leading?: ReactNode
    heading: string
    supporting: string
    trailing?: ReactNode
}

export interface ContentItemProps {
    config?: {
        align?: ContentAlignType
        direction?: FlexDirectionType
    }
    content: ContentItemContentInterface
    variant?: ContentItemVariantType
}
