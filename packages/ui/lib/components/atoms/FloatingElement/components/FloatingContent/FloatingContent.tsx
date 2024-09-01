import { PropsWithChildren, forwardRef, useImperativeHandle, useRef } from 'react'
import { useTransition, animated } from '@react-spring/web'

// Provider
import { FloatingAnchorType, useFloatingContext } from '@/components/atoms/FloatingElement/provider'
import { useFloatingCoordinates } from './useFloatingCoordinates'

export interface FloatingContentProps {
    anchor: FloatingAnchorType
    onRest?: () => void
}

export const FloatingContent = forwardRef<HTMLDivElement, PropsWithChildren<FloatingContentProps>>(function Base(
    { anchor, onRest, children, ...rest },
    ref,
) {
    const context = useFloatingContext()
    const internalRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => internalRef.current!, [internalRef])

    const { position, animations } = useFloatingCoordinates(
        anchor,
        context.config.animation,
        context.trigger.coordinates,
    )

    const transition = useTransition(context.active && anchor !== 'IDLE' && position, {
        from: { ...animations.from },
        enter: { ...animations.enter },
        leave: { ...animations.leave },
        config: {
            tension: 300,
            friction: 30,
        },
        onRest: () => {
            if (!context.active && onRest) {
                onRest()
            }
        },
    })

    return transition(
        (style, item) =>
            item && (
                <animated.div
                    key={`${new Date().getTime().toString()}-${anchor}`}
                    ref={internalRef}
                    style={{
                        width: 'max-content',
                        position: 'fixed',
                        left: position?.x,
                        top: position?.y,
                        ...style,
                    }}
                    {...rest}
                >
                    {children}
                </animated.div>
            ),
    )
})
