import { PropsWithChildren, forwardRef } from 'react'

// Packages
import { useWindowSize } from '@ades/hooks'

// Provider
import { ModalProvider } from './provider'

// Components
import { DesktopModal, MobileModal } from './components'

export interface ModalProps {
    active: boolean
    close: () => void
}

export const Modal = forwardRef<HTMLDivElement, PropsWithChildren<ModalProps>>(function Base(
    { active, close, children, ...rest },
    ref,
) {
    const screen = useWindowSize()

    const isMobile = (): boolean => screen?.width < 768

    return (
        <ModalProvider active={active} close={close}>
            {isMobile() ? (
                <MobileModal ref={ref} {...rest}>
                    {children}
                </MobileModal>
            ) : (
                <DesktopModal ref={ref} {...rest}>
                    {children}
                </DesktopModal>
            )}
        </ModalProvider>
    )
})
