import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './FloatingArrow.styled'
import { FloatingAnchorType } from '../FloatingElement/provider'

export interface FloatingArrowProps {
    anchor?: FloatingAnchorType
    background?: string
    border?: string
}

export const FloatingArrow = forwardRef<HTMLDivElement, PropsWithChildren<FloatingArrowProps>>(function Base(
    { anchor, background = '', border = '', children, ...rest },
    ref,
) {
    return (
        <Layout.Root ref={ref} $anchor={anchor} $background={background} $border={border} {...rest}>
            <Layout.Triangle $anchor={anchor} $background={background} $border={border} />

            {children}
        </Layout.Root>
    )
})
