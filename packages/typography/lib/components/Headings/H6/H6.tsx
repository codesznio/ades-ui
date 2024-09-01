import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Root } from '@/components/Headings/Heading.styled'

// Types
import { FontColorType, FontWeightType, HeadingSizeType } from '@/types'
import { HeadingProps } from '@/components/Headings/HeadingProps.interface'

export const H6 = forwardRef<HTMLHeadingElement, PropsWithChildren<HeadingProps>>(function Base(
    {
        color = FontColorType.INHERIT,
        ellipse = false,
        size = HeadingSizeType.LEVEL6,
        weight = FontWeightType.INHERIT,
        children,
        ...rest
    },
    ref,
) {
    return (
        <Root ref={ref} $color={color} $ellipse={ellipse} $size={size} $weight={weight} as="h6" {...rest}>
            {children}
        </Root>
    )
})
