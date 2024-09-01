import { PropsWithChildren, useState } from 'react'

// Provider
import { LanguageSelectorContext } from './LanguageSelector.context'

// Types
import { LanguageKeyType } from '../types'

function useLanguageSelector() {
    const [active, setActive] = useState<boolean>(false)

    return {
        modal: {
            active,
            close: () => setActive(false),
            open: () => setActive(true),
        },
    }
}

export interface LanguageSelectorProvider {
    config?: {
        label?: string
        size?: number
    }
    selected: LanguageKeyType
    supported: LanguageKeyType[]
    support?: {
        title?: string
        text?: string
    }
    changeLanguage: (lang: LanguageKeyType) => void
}

export function LanguageSelectorProvider({
    children,
    config = {},
    selected,
    supported,
    support = {},
    changeLanguage,
}: PropsWithChildren<LanguageSelectorProvider>) {
    const {
        title = 'Limited Language Support Notice',
        text = 'Currently, our platform supports only one language. We are actively working on adding support for multiple languages in the near future. We appreciate your understanding and patience as we strive to enhance your user experience. If you have any specific language requests or feedback, please let us know, and we will prioritize them in our development roadmap.',
    } = support

    return (
        <LanguageSelectorContext.Provider
            value={{ ...useLanguageSelector(), config, changeLanguage, selected, support: { title, text }, supported }}
        >
            {children}
        </LanguageSelectorContext.Provider>
    )
}
