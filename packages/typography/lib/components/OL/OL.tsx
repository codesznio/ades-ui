import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './OL.styled'

// Types
import { BodySizeType, FontColorType, FontWeightType, ListStyleType } from '@/types'

export interface OLProps {
    color?: FontColorType
    ellipse?: boolean
    size?: BodySizeType
    type?: ListStyleType
    weight?: FontWeightType
}

export const OL = forwardRef<HTMLOListElement, PropsWithChildren<OLProps>>(function Base(
    {
        color = FontColorType.INHERIT,
        ellipse = false,
        size = BodySizeType.M,
        type = ListStyleType.DISC,

        weight = FontWeightType.INHERIT,
        children,
        ...rest
    },
    ref,
) {
    return (
        <Layout.Root ref={ref} $color={color} $ellipse={ellipse} $size={size} $type={type} $weight={weight} {...rest}>
            {children}
        </Layout.Root>
    )
})
