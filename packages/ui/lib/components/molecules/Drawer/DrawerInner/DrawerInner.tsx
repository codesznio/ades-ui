import { PropsWithChildren, forwardRef, useImperativeHandle, useRef } from 'react'
import { useTransition } from '@react-spring/web'

// Packages
import { KeyPressType, useDetectOutsideClick, useKeyPress, useWindowSize } from '@ades/hooks'

// Styling
import { Layout } from './DrawerInner.styled'

export interface DrawerInnerProps {
    active: boolean
    right: boolean
    close: () => void
    onRest?: () => void
}

export const DrawerInner = forwardRef<HTMLDivElement, PropsWithChildren<DrawerInnerProps>>(function Base(
    { active, right, close, onRest, children, ...rest },
    ref,
) {
    const screen = useWindowSize()
    const internalRef = useRef<HTMLDivElement>(null)

    // Determine the animation values based on the left prop
    const startPosition = -screen.width
    const endPosition = 0

    const transition = useTransition(active, {
        from: { opacity: 0, [right ? 'right' : 'left']: startPosition, top: 0 },
        enter: { opacity: 1, [right ? 'right' : 'left']: endPosition, top: 0 },
        leave: { opacity: 0, [right ? 'right' : 'left']: startPosition, top: 0 },
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
