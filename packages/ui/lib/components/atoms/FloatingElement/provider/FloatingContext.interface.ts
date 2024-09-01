import { MutableRefObject } from 'react'

// Packages
import { ElementCoordinates } from '@ades/hooks'

// Types
import { FloatingMountType } from './FloatingMount.type'
import { FloatingAnimationType } from './FloatingAnimation.type'

export interface FloatingContextInterface {
    active: boolean
    config: {
        animation: FloatingAnimationType
        mount: FloatingMountType
    }
    content: {
        coordinates: ElementCoordinates | null
        ref: MutableRefObject<HTMLDivElement | null>
    }
    trigger: {
        coordinates: ElementCoordinates | null
        ref: MutableRefObject<HTMLDivElement | null>
    }
}
