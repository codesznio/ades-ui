import { PropsWithChildren, forwardRef } from 'react'

// Components
import { AnimatedMount, Overlay } from '@/components/atoms'
import { DesktopModalInner } from './DesktopModalInner'

// Data
import { useModalContext } from '@/components/molecules/Modal/provider'

export const DesktopModal = forwardRef<HTMLDivElement, PropsWithChildren>(function Base({ children, ...rest }, ref) {
    const { active, close } = useModalContext()

    return (
        <AnimatedMount active={active}>
            <Overlay active={active} />
            <DesktopModalInner ref={ref} active={active} close={close} {...rest}>
                {children}
            </DesktopModalInner>
        </AnimatedMount>
    )
})
