import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './ContentIcon.styled'

// Types
import { ContentIconRadiusType } from './ContentIconRadius.type'
import { ContentIconSizeType } from './ContentIconSize.type'

export interface ContentIconProps {
    palette?: {
        background?: string
        border?: string
        color?: string
    }
    radius?: ContentIconRadiusType
    size?: ContentIconSizeType
}

export const ContentIcon = forwardRef<HTMLDivElement, PropsWithChildren<ContentIconProps>>(function Base(
    { palette = {}, radius = ContentIconRadiusType.ROUNDED, size = 'SECONDARY', children, ...rest },
    ref,
) {
    const { background = 'transparent', border = 'transparent', color = 'inherit' } = palette

    return (
        <Layout.Root
            ref={ref}
            $background={background}
            $border={border}
            $color={color}
            $radius={radius}
            $size={size}
            {...rest}
        >
            {children}
        </Layout.Root>
    )
})
