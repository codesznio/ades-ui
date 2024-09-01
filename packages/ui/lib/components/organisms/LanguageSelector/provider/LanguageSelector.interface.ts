import { LanguageKeyType } from '../types'

export interface LanguageSelectorContextInterface {
    config?: {
        label?: string
        size?: number
    }
    modal: {
        active: boolean
        close: () => void
        open: () => void
    }
    support?: {
        title?: string
        text?: string
    }
    selected: LanguageKeyType
    supported: LanguageKeyType[]
    changeLanguage: (lang: LanguageKeyType) => void
}
