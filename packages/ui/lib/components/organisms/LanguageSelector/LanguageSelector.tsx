// Data
import { LanguageSelectorProvider } from './provider'
import { LanguageKeyType } from './types'

// Components
import { LanguageSelectorInner } from './components/LanguageSelectorInner'

export interface LanguageSelectorProps {
    config?: {
        label?: string
        size?: number
    }
    selected: LanguageKeyType
    support?: {
        title?: string
        text?: string
    }
    supported: LanguageKeyType[]
    changeLanguage: (lang: string) => void
}

export function LanguageSelector({ config, selected, support, supported, changeLanguage }: LanguageSelectorProps) {
    return (
        <LanguageSelectorProvider
            changeLanguage={changeLanguage}
            config={config}
            selected={selected}
            support={support}
            supported={supported}
        >
            <LanguageSelectorInner />
        </LanguageSelectorProvider>
    )
}
