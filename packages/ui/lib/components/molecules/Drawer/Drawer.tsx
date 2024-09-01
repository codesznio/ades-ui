import { PropsWithChildren, forwardRef } from 'react'

// Components
import { AnimatedMount, Overlay } from '@/components/atoms'
import { DrawerInner } from './DrawerInner'

export interface DrawerProps {
    active: boolean
    right?: boolean
    close: () => void
}

export const Drawer = forwardRef<HTMLDivElement, PropsWithChildren<DrawerProps>>(function Base(
    { active, right = false, close, children, ...rest },
    ref,
) {
    return (
        <AnimatedMount active={active}>
            <Overlay active={active} />
            <DrawerInner ref={ref} active={active} close={close} right={right} {...rest}>
                {children}
            </DrawerInner>
        </AnimatedMount>
    )
})
