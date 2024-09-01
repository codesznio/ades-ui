import { useContext } from 'react'

// Context
import { ModalContext } from './ModalContext'

export function useModalContext() {
    return useContext(ModalContext)
}
