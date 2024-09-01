import { PropsWithChildren, forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { useSpring, useTransition } from '@react-spring/web'

// Packages
import { KeyPressType, useDetectOutsideClick, useKeyPress, useWindowSize } from '@ades/hooks'

// Styling
import { Layout } from './MobileModalInner.styled'
import { useDrag } from '@use-gesture/react'

export interface MobileModalInnerProps {
    active: boolean
    close: () => void
    onRest?: () => void
}

export const MobileModalInner = forwardRef<HTMLDivElement, PropsWithChildren<MobileModalInnerProps>>(function Base(
    { active, close, onRest, children, ...rest },
    ref,
) {
    const window = useWindowSize()
    const internalRef = useRef<HTMLDivElement>(null)
    const [y] = useState(0)

    const transition = useTransition(active, {
        from: { opacity: 1, bottom: window.height * -1 },
        enter: { opacity: 1, bottom: 0 },
        leave: { opacity: 1, bottom: window.height * -1 },
        config: {
            tension: 200,
            friction: 30,
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

    const [{ yPos }, api] = useSpring(() => ({
        yPos: 0,
        config: {
            tension: 300,
            friction: 50, // Adjust friction to complement the tension
        },
    }))

    // Handle swipe down to close
    const bind = useDrag(
        ({ movement: [, my], direction: [, dy], cancel, active, last }) => {
            if (active) {
                api.start({ yPos: my })
            } else if (last) {
                if (dy > 0 && my > 100) {
                    cancel()
                    close() // Close the modal
                } else {
                    api.start({ yPos: 0 }) // Reset position
                }
            }
        },
        { axis: 'y', from: () => [0, y], bounds: { top: 0 } },
    )

    return transition(
        (style, item) =>
            item && (
                <Layout.Root
                    ref={internalRef}
                    style={{ ...style, transform: yPos.to((y) => `translateY(${y}px)`) }}
                    {...bind()} // Attach the drag gesture handler
                    {...rest}
                >
                    {children}
                </Layout.Root>
            ),
    )
})
