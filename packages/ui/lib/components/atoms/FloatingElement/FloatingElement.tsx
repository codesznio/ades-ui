import { PropsWithChildren, forwardRef } from 'react'

// Provder
import { FloatingAnimationType, FloatingMountType, FloatingProvider } from './provider'

// Components
import { FloatingInner } from './components'

export interface FloatingElementProps {
    active: boolean
    config?: {
        animation?: FloatingAnimationType
        mount?: FloatingMountType
    }
}

export const FloatingElement = forwardRef<HTMLDivElement, PropsWithChildren<FloatingElementProps>>(function Base(
    { active, config = {}, children, ...rest },
    ref,
) {
    const { animation = 'SLIDE', mount = 'X' } = config

    return (
        <FloatingProvider active={active} config={{ animation, mount }}>
            <FloatingInner ref={ref} {...rest}>
                {children}
            </FloatingInner>
        </FloatingProvider>
    )
})
