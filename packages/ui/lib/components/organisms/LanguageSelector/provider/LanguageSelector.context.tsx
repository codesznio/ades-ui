import { createContext } from 'react'

// Types
import { LanguageSelectorContextInterface } from './LanguageSelector.interface'
import { LanguageKeyType } from '../types'

export const LanguageSelectorContext = createContext<LanguageSelectorContextInterface>({
    config: {
        size: 28,
    },
    modal: {
        active: false,
        close: () => null,
        open: () => null,
    },
    support: {
        title: '',
        text: '',
    },
    selected: LanguageKeyType.EN,
    supported: [],
    changeLanguage: () => null,
})
