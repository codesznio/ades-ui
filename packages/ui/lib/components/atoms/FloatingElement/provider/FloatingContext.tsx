import { createContext } from 'react'

// Types
import { FloatingContextInterface } from './FloatingContext.interface'
import { FloatingMountType } from './FloatingMount.type'
import { FloatingAnimationType } from './FloatingAnimation.type'

export const FloatingContext = createContext<FloatingContextInterface>({
    active: false,
    config: {
        animation: FloatingAnimationType.SLIDE,
        mount: FloatingMountType.X,
    },
    content: {
        coordinates: null,
        ref: { current: null },
    },
    trigger: {
        coordinates: null,
        ref: { current: null },
    },
})
