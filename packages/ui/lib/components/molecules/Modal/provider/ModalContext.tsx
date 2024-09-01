import { createContext } from 'react'

import { ModalContextInterface } from './ModalContext.interface'

export const ModalContext = createContext<ModalContextInterface>({
    active: false,
    close: () => null,
})
