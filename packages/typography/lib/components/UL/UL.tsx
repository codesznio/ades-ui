import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './UL.styled'

// Types
import { BodySizeType, FontColorType, FontWeightType, ListStyleType } from '@/types'

export interface ULProps {
    color?: FontColorType
    ellipse?: boolean
    size?: BodySizeType
    type?: ListStyleType
    weight?: FontWeightType
}

export const UL = forwardRef<HTMLUListElement, PropsWithChildren<ULProps>>(function Base(
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
