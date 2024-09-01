import { MutableRefObject, useCallback, useEffect, useState } from 'react'

// Packages
import { ElementCoordinates, useBelowCenterHalf, useRightHalf, useWindowSize } from '@ades/hooks'

// Types
import { FloatingAnchorType, FloatingMountType } from '@/components/atoms/FloatingElement/provider'

export function useFloatingAnchor(
    coordinates: ElementCoordinates | null,
    mount: FloatingMountType,
    triggerRef: MutableRefObject<HTMLDivElement | null>,
): FloatingAnchorType {
    const [anchor, setAnchor] = useState<FloatingAnchorType>(FloatingAnchorType.IDLE)

    const screen = useWindowSize()
    const isBelow = useBelowCenterHalf(triggerRef)
    const isRight = useRightHalf(triggerRef)

    const defineAnchor = useCallback(() => {
        if (!coordinates) {
            return
        }

        const setAnchorType = (condition: boolean, trueAnchor: FloatingAnchorType, falseAnchor: FloatingAnchorType) => {
            condition ? setAnchor(trueAnchor) : setAnchor(falseAnchor)
        }

        if (mount === 'X') {
            if (coordinates.center.left.x < 200) {
                setAnchorType(isBelow, FloatingAnchorType.TOP_START, FloatingAnchorType.BOTTOM_START)
            } else if (coordinates.center.right.x > screen.width - 200) {
                setAnchorType(isBelow, FloatingAnchorType.TOP_END, FloatingAnchorType.BOTTOM_END)
            } else {
                setAnchorType(isBelow, FloatingAnchorType.TOP, FloatingAnchorType.BOTTOM)
            }
        }

        if (mount === 'Y') {
            if (coordinates.center.top.y < 200) {
                setAnchorType(isRight, FloatingAnchorType.LEFT_START, FloatingAnchorType.RIGHT_START)
            } else if (coordinates.center.bottom.y > screen.height - 200) {
                setAnchorType(isRight, FloatingAnchorType.LEFT_END, FloatingAnchorType.RIGHT_END)
            } else {
                setAnchorType(isRight, FloatingAnchorType.LEFT, FloatingAnchorType.RIGHT)
            }
        }
    }, [coordinates, isBelow, isRight, mount, screen.height, screen.width])

    useEffect(() => {
        const handleResize = () => {
            defineAnchor()
        }

        window.addEventListener('scroll', handleResize)
        window.addEventListener('resize', handleResize)

        // Compute initial position
        handleResize()

        return () => {
            window.removeEventListener('scroll', handleResize)
            window.removeEventListener('resize', handleResize)
        }
    }, [defineAnchor])

    return anchor
}
