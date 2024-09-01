import { PropsWithChildren, forwardRef } from 'react'

// Components
import { Overlay } from '@/components/atoms'
import { MobileModalInner } from './MobileModalInner'

// Data
import { useModalContext } from '@/components/molecules/Modal/provider'
import { AnimatedMount } from '@/components/atoms/AnimatedMount'

export const MobileModal = forwardRef<HTMLDivElement, PropsWithChildren>(function Base({ children, ...rest }, ref) {
    const { active, close } = useModalContext()
    return (
        <AnimatedMount active={active}>
            <Overlay active={active} />
            <MobileModalInner ref={ref} active={active} close={close} {...rest}>
                {children}
            </MobileModalInner>
        </AnimatedMount>
    )
})
