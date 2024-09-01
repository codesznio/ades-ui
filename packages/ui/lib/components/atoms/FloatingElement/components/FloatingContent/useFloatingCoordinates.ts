import { useCallback, useEffect, useState } from 'react'

// Hooks
import { ElementCoordinates } from '@ades/hooks'

// Provider
import { FloatingAnchorType, FloatingAnimationType } from '@/components/atoms/FloatingElement/provider'

interface AnimationType {
    opacity?: number
    transform?: string
}

export function useFloatingCoordinates(
    anchor: FloatingAnchorType,
    animation: FloatingAnimationType,
    coordinates: ElementCoordinates | null,
) {
    const [position, setPosition] = useState<{ x: number; y: number } | null>(null)
    const [animations, setAnimations] = useState<{
        enter: AnimationType
        from: AnimationType
        leave: AnimationType
    }>({
        enter: {},
        from: {},
        leave: {},
    })

    const calculatePosition = useCallback(() => {
        if (!coordinates) {
            return
        }

        switch (anchor) {
            case FloatingAnchorType.TOP_END:
                return setPosition({ x: coordinates.corners.top.right.x, y: coordinates.corners.top.right.y })
            case FloatingAnchorType.TOP_START:
                return setPosition({ x: coordinates.corners.top.left.x, y: coordinates.corners.top.left.y })
            case FloatingAnchorType.TOP:
                return setPosition({ x: coordinates.center.top.x, y: coordinates.center.top.y })
            case FloatingAnchorType.BOTTOM_START:
                return setPosition({ x: coordinates.corners.bottom.left.x, y: coordinates.corners.bottom.left.y })
            case FloatingAnchorType.BOTTOM:
                return setPosition({ x: coordinates.center.bottom.x, y: coordinates.center.bottom.y })
            case FloatingAnchorType.RIGHT:
                return setPosition({ x: coordinates.center.right.x, y: coordinates.center.right.y })
            case FloatingAnchorType.RIGHT_START:
                return setPosition({ x: coordinates.corners.top.right.x, y: coordinates.corners.top.right.y })
            case FloatingAnchorType.BOTTOM_END:
            case FloatingAnchorType.RIGHT_END:
                return setPosition({
                    x: coordinates.corners.bottom.right.x,
                    y: coordinates.corners.bottom.right.y,
                })
            case FloatingAnchorType.LEFT:
                return setPosition({ x: coordinates.center.left.x, y: coordinates.center.left.y })
            case FloatingAnchorType.LEFT_START:
                return setPosition({ x: coordinates.corners.top.left.x, y: coordinates.corners.top.left.y })
            case FloatingAnchorType.LEFT_END:
                return setPosition({ x: coordinates.corners.bottom.left.x, y: coordinates.corners.bottom.left.y })
            default:
                return
        }
    }, [anchor, coordinates])

    const calculateAnimation = useCallback(() => {
        if (!coordinates) {
            return
        }

        if (animation === 'FADE') {
            switch (anchor) {
                case FloatingAnchorType.TOP_END:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(-100%, calc(-100% - 10px))' },
                        from: { opacity: 0, transform: 'translate(-100%, calc(-100% - 10px))' },
                        leave: { opacity: 0, transform: 'translate(-100%, calc(-100% - 10px))' },
                    })
                case FloatingAnchorType.TOP_START:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(0%, calc(-100% - 10px))' },
                        from: { opacity: 0, transform: 'translate(0%, calc(-100% - 10px))' },
                        leave: { opacity: 0, transform: 'translate(0%, calc(-100% - 10px))' },
                    })
                case FloatingAnchorType.TOP:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(-50%, calc(-100% - 10px))' },
                        from: { opacity: 0, transform: 'translate(-50%, calc(-100% - 10px))' },
                        leave: { opacity: 0, transform: 'translate(-50%, calc(-100% - 10px))' },
                    })
                case FloatingAnchorType.BOTTOM_END:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(-100%, 10px)' },
                        from: { opacity: 0, transform: 'translate(-100%, 10px)' },
                        leave: { opacity: 0, transform: 'translate(-100%, 10px)' },
                    })
                case FloatingAnchorType.BOTTOM_START:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(0, 10px)' },
                        from: { opacity: 0, transform: 'translate(0, 10px)' },
                        leave: { opacity: 0, transform: 'translate(0, 10px)' },
                    })
                case FloatingAnchorType.BOTTOM:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(-50%, 10px)' },
                        from: { opacity: 0, transform: 'translate(-50%, 10px)' },
                        leave: { opacity: 0, transform: 'translate(-50%, 10px)' },
                    })
                case FloatingAnchorType.RIGHT:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(10px, -50%)' },
                        from: { opacity: 0, transform: 'translate(10px, -50%)' },
                        leave: { opacity: 0, transform: 'translate(10px, -50%)' },
                    })
                case FloatingAnchorType.RIGHT_START:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(10px, 0%)' },
                        from: { opacity: 0, transform: 'translate(10px, 0%)' },
                        leave: { opacity: 0, transform: 'translate(10px, 0%)' },
                    })
                case FloatingAnchorType.RIGHT_END:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(10px, -100%)' },
                        from: { opacity: 0, transform: 'translate(10px, -100%)' },
                        leave: { opacity: 0, transform: 'translate(10px, -100%)' },
                    })
                case FloatingAnchorType.LEFT:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(calc(-100% - 10px), -50%)' },
                        from: { opacity: 0, transform: 'translate(calc(-100% - 10px), -50%)' },
                        leave: { opacity: 0, transform: 'translate(calc(-100% - 10px), -50%)' },
                    })
                case FloatingAnchorType.LEFT_START:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(calc(-100% - 10px), 0%)' },
                        from: { opacity: 0, transform: 'translate(calc(-100% - 10px), 0%)' },
                        leave: { opacity: 0, transform: 'translate(calc(-100% - 10px), 0%)' },
                    })
                case FloatingAnchorType.LEFT_END:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(calc(-100% - 10px), -100%)' },
                        from: { opacity: 0, transform: 'translate(calc(-100% - 10px), -100%)' },
                        leave: { opacity: 0, transform: 'translate(calc(-100% - 10px), -100%)' },
                    })
                default:
                    return
            }
        }

        if (animation === 'SLIDE') {
            switch (anchor) {
                case FloatingAnchorType.TOP_END:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(-100%, calc(-100% - 10px))' },
                        from: { opacity: 0, transform: 'translate(-100%, calc(-100% - 15px))' },
                        leave: { opacity: 0, transform: 'translate(-100%, calc(-100% - 15px))' },
                    })
                case FloatingAnchorType.TOP_START:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(0%, calc(-100% - 10px))' },
                        from: { opacity: 0, transform: 'translate(0%, calc(-100% - 15px))' },
                        leave: { opacity: 0, transform: 'translate(0%, calc(-100% - 15px))' },
                    })
                case FloatingAnchorType.TOP:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(-50%, calc(-100% - 10px))' },
                        from: { opacity: 0, transform: 'translate(-50%, calc(-100% - 15px))' },
                        leave: { opacity: 0, transform: 'translate(-50%, calc(-100% - 15px))' },
                    })
                case FloatingAnchorType.BOTTOM_END:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(-100%, 10px)' },
                        from: { opacity: 0, transform: 'translate(-100%, 15px)' },
                        leave: { opacity: 0, transform: 'translate(-100%, 15px)' },
                    })
                case FloatingAnchorType.BOTTOM_START:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(0, 10px)' },
                        from: { opacity: 0, transform: 'translate(0, 15px)' },
                        leave: { opacity: 0, transform: 'translate(0, 15px)' },
                    })
                case FloatingAnchorType.BOTTOM:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(-50%, 10px)' },
                        from: { opacity: 0, transform: 'translate(-50%, 15px)' },
                        leave: { opacity: 0, transform: 'translate(-50%, 15px)' },
                    })
                case FloatingAnchorType.RIGHT:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(10px, -50%)' },
                        from: { opacity: 0, transform: 'translate(15px, -50%)' },
                        leave: { opacity: 0, transform: 'translate(15px, -50%)' },
                    })
                case FloatingAnchorType.RIGHT_START:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(10px, 0%)' },
                        from: { opacity: 0, transform: 'translate(15px, 0%)' },
                        leave: { opacity: 0, transform: 'translate(15px, 0%)' },
                    })
                case FloatingAnchorType.RIGHT_END:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(10px, -100%)' },
                        from: { opacity: 0, transform: 'translate(15px, -100%)' },
                        leave: { opacity: 0, transform: 'translate(15px, -100%)' },
                    })
                case FloatingAnchorType.LEFT:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(calc(-100% - 10px), -50%)' },
                        from: { opacity: 0, transform: 'translate(calc(-100% - 15px), -50%)' },
                        leave: { opacity: 0, transform: 'translate(calc(-100% - 15px), -50%)' },
                    })
                case FloatingAnchorType.LEFT_START:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(calc(-100% - 10px), 0%)' },
                        from: { opacity: 0, transform: 'translate(calc(-100% - 15px), 0%)' },
                        leave: { opacity: 0, transform: 'translate(calc(-100% - 15px), 0%)' },
                    })
                case FloatingAnchorType.LEFT_END:
                    return setAnimations({
                        enter: { opacity: 1, transform: 'translate(calc(-100% - 10px), -100%)' },
                        from: { opacity: 0, transform: 'translate(calc(-100% - 15px), -100%)' },
                        leave: { opacity: 0, transform: 'translate(calc(-100% - 15px), -100%)' },
                    })
                default:
                    return
            }
        }

        if (animation === 'NONE') {
            switch (anchor) {
                case FloatingAnchorType.TOP_END:
                    return setAnimations({
                        enter: { transform: 'translate(-100%, calc(-100% - 10px))' },
                        from: { transform: 'translate(-100%, calc(-100% - 10px))' },
                        leave: { transform: 'translate(-100%, calc(-100% - 10px))' },
                    })
                case FloatingAnchorType.TOP_START:
                    return setAnimations({
                        enter: { transform: 'translate(0%, calc(-100% - 10px))' },
                        from: { transform: 'translate(0%, calc(-100% - 10px))' },
                        leave: { transform: 'translate(0%, calc(-100% - 10px))' },
                    })
                case FloatingAnchorType.TOP:
                    return setAnimations({
                        enter: { transform: 'translate(-50%, calc(-100% - 10px))' },
                        from: { transform: 'translate(-50%, calc(-100% - 10px))' },
                        leave: { transform: 'translate(-50%, calc(-100% - 10px))' },
                    })
                case FloatingAnchorType.BOTTOM_END:
                    return setAnimations({
                        enter: { transform: 'translate(-100%, 10px)' },
                        from: { transform: 'translate(-100%, 10px)' },
                        leave: { transform: 'translate(-100%, 10px)' },
                    })
                case FloatingAnchorType.BOTTOM_START:
                    return setAnimations({
                        enter: { transform: 'translate(0, 10px)' },
                        from: { transform: 'translate(0, 10px)' },
                        leave: { transform: 'translate(0, 10px)' },
                    })
                case FloatingAnchorType.BOTTOM:
                    return setAnimations({
                        enter: { transform: 'translate(-50%, 10px)' },
                        from: { transform: 'translate(-50%, 10px)' },
                        leave: { transform: 'translate(-50%, 10px)' },
                    })
                case FloatingAnchorType.RIGHT:
                    return setAnimations({
                        enter: { transform: 'translate(10px, -50%)' },
                        from: { transform: 'translate(10px, -50%)' },
                        leave: { transform: 'translate(10px, -50%)' },
                    })
                case FloatingAnchorType.RIGHT_START:
                    return setAnimations({
                        enter: { transform: 'translate(10px, 0%)' },
                        from: { transform: 'translate(10px, 0%)' },
                        leave: { transform: 'translate(10px, 0%)' },
                    })
                case FloatingAnchorType.RIGHT_END:
                    return setAnimations({
                        enter: { transform: 'translate(10px, -100%)' },
                        from: { transform: 'translate(10px, -100%)' },
                        leave: { transform: 'translate(10px, -100%)' },
                    })
                case FloatingAnchorType.LEFT:
                    return setAnimations({
                        enter: { transform: 'translate(calc(-100% - 10px), -50%)' },
                        from: { transform: 'translate(calc(-100% - 10px), -50%)' },
                        leave: { transform: 'translate(calc(-100% - 10px), -50%)' },
                    })
                case FloatingAnchorType.LEFT_START:
                    return setAnimations({
                        enter: { transform: 'translate(calc(-100% - 10px), 0%)' },
                        from: { transform: 'translate(calc(-100% - 10px), 0%)' },
                        leave: { transform: 'translate(calc(-100% - 10px), 0%)' },
                    })
                case FloatingAnchorType.LEFT_END:
                    return setAnimations({
                        enter: { transform: 'translate(calc(-100% - 10px), -100%)' },
                        from: { transform: 'translate(calc(-100% - 10px), -100%)' },
                        leave: { transform: 'translate(calc(-100% - 10px), -100%)' },
                    })
                default:
                    return
            }
        }
    }, [anchor, animation, coordinates])

    useEffect(() => {
        const handleResize = () => {
            calculateAnimation()
            calculatePosition()
        }

        window.addEventListener('scroll', handleResize)
        window.addEventListener('resize', handleResize)

        // Compute initial position
        handleResize()

        return () => {
            window.removeEventListener('scroll', handleResize)
            window.removeEventListener('resize', handleResize)
        }
    }, [calculateAnimation, calculatePosition])

    return {
        position,
        animations,
    }
}
