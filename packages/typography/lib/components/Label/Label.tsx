import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Root } from './Label.styled'

// Type
import { BodySizeType, FontColorType, FontWeightType } from '@/types'

export interface LabelProps {
    htmlFor: string
    color?: FontColorType
    ellipse?: boolean
    size?: BodySizeType
    weight?: FontWeightType
}

export const Label = forwardRef<HTMLLabelElement, PropsWithChildren<LabelProps>>(function Base(
    {
        htmlFor,
        color = FontColorType.INHERIT,
        ellipse = false,
        size = BodySizeType.INHERIT,
        weight = FontWeightType.INHERIT,
        children,
        ...rest
    },
    ref,
) {
    return (
        <Root ref={ref} $color={color} $ellipse={ellipse} $size={size} $weight={weight} htmlFor={htmlFor} {...rest}>
            {children}
        </Root>
    )
})
