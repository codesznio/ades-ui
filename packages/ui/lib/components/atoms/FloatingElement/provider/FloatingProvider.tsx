import { PropsWithChildren, useRef } from 'react'

// Packages
import { useElementCoordinates } from '@ades/hooks'

// Context
import { FloatingContext } from './FloatingContext'
import { FloatingMountType } from './FloatingMount.type'
import { FloatingAnimationType } from './FloatingAnimation.type'

function useFloating() {
    const contentRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)

    const contentCoordinates = useElementCoordinates(contentRef)
    const triggerCoordinates = useElementCoordinates(triggerRef)

    return {
        content: {
            coordinates: contentCoordinates,
            ref: contentRef,
        },
        trigger: {
            coordinates: triggerCoordinates,
            ref: triggerRef,
        },
    }
}

interface Props {
    active: boolean
    config?: {
        animation?: FloatingAnimationType
        mount?: FloatingMountType
    }
}

export function FloatingProvider({ active, config = {}, children }: PropsWithChildren<Props>) {
    const { animation = FloatingAnimationType.SLIDE, mount = 'X' } = config

    return (
        <FloatingContext.Provider value={{ ...useFloating(), active, config: { animation, mount } }}>
            {children}
        </FloatingContext.Provider>
    )
}
