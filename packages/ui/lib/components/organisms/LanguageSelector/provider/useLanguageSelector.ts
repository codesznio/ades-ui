import { useContext } from 'react'

// Context
import { LanguageSelectorContext } from './LanguageSelector.context'

export function useLanguageSelectorContext() {
    return useContext(LanguageSelectorContext)
}
