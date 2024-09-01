import { forwardRef } from 'react'
import { useTransition } from '@react-spring/web'

// Packages
import { useLockedBodyScroll } from '@ades/hooks'

// Styling
import { Layout } from './Overlay.styled'

// Types
import { OverlayVariantType } from './OverlayVariant.type'

export interface OverlayProps {
    active: boolean
    color?: string
    variant?: OverlayVariantType
    onRest?: () => void
}

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(function Base(
    { active, color = 'rgba(70, 130, 180, 0.4)', variant = OverlayVariantType.DEFAULT, onRest, ...rest },
    ref,
) {
    useLockedBodyScroll(active)

    const transition = useTransition(active, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        onRest: () => {
            if (!active && onRest) {
                onRest()
            }
        },
    })

    return transition(
        (style, item) => item && <Layout.Root ref={ref} $color={color} $variant={variant} style={style} {...rest} />,
    )
})
