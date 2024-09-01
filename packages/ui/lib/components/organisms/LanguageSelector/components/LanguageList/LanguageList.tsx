// Styling
import { Layout } from './LanguageList.styled'

// Types
import { LanguageKeyType, LanguageNameType } from '@/components/organisms/LanguageSelector/types'

// Components
import { LanguageListItem } from './LanguageListItem'
import { useLanguageSelectorContext } from '@/components/organisms/LanguageSelector/provider'

export function LanguageList() {
    const { changeLanguage, modal, supported } = useLanguageSelectorContext()

    const reverseLanguageKeyType: Record<string, keyof typeof LanguageKeyType> = {}

    for (const key in LanguageKeyType) {
        if (Object.prototype.hasOwnProperty.call(LanguageKeyType, key)) {
            reverseLanguageKeyType[LanguageKeyType[key as keyof typeof LanguageKeyType]] =
                key as keyof typeof LanguageKeyType
        }
    }

    const getLanguageInfo = (codes: string[]) => {
        return codes.map((code) => {
            const key = reverseLanguageKeyType[code]
            return {
                code: LanguageKeyType[key],
                name: LanguageNameType[key],
            }
        })
    }

    const languages = getLanguageInfo(supported as LanguageKeyType[])

    return (
        <Layout.Root>
            {languages.map((lang) => (
                <LanguageListItem
                    key={lang.code}
                    lang={lang}
                    onClick={() => {
                        changeLanguage(lang.code)
                        modal.close()
                    }}
                />
            ))}
        </Layout.Root>
    )
}
