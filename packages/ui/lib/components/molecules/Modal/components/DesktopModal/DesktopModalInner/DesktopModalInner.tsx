import { PropsWithChildren, forwardRef, useImperativeHandle, useRef } from 'react'
import { useTransition } from '@react-spring/web'

// Packages
import { KeyPressType, useDetectOutsideClick, useKeyPress } from '@ades/hooks'

// Styling
import { Layout } from './DesktopModalInner.styled'

export interface DesktopModalInnerProps {
    active: boolean
    close: () => void
    onRest?: () => void
}

export const DesktopModalInner = forwardRef<HTMLDivElement, PropsWithChildren<DesktopModalInnerProps>>(function Base(
    { active, close, onRest, children, ...rest },
    ref,
) {
    const internalRef = useRef<HTMLDivElement>(null)

    const transition = useTransition(active, {
        from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
        enter: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        leave: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
        config: {
            tension: 250,
            friction: 25,
        },
        onRest: () => {
            if (!active && onRest) {
                onRest()
            }
        },
    })

    useImperativeHandle(ref, () => internalRef.current!, [internalRef])
    useDetectOutsideClick(internalRef, close)
    useKeyPress(KeyPressType.Escape, close)

    return transition(
        (style, item) =>
            item && (
                <Layout.Root ref={internalRef} style={style} {...rest}>
                    {children}
                </Layout.Root>
            ),
    )
})
