import { PropsWithChildren } from 'react'

// Context
import { ModalContext } from './ModalContext'

interface Props {
    active: boolean
    close: () => void
}

export function ModalProvider({ active, close, children }: PropsWithChildren<Props>) {
    return <ModalContext.Provider value={{ active, close }}>{children}</ModalContext.Provider>
}
