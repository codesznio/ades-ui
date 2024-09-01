import { CircleFlagLanguage } from 'react-circle-flags'

// Stying
import { Layout, Text } from './LanguageListItem.styled'

// Types
import { SupportedLanguage } from '@/components/organisms/LanguageSelector/types'

interface Props {
    lang: SupportedLanguage
    onClick: () => void
}

export function LanguageListItem({ lang, onClick }: Props) {
    return (
        <Layout.Root selected={false} onClick={onClick}>
            <CircleFlagLanguage height={26} languageCode={lang.code} width={26} />

            <Text.Name>{lang.name}</Text.Name>
        </Layout.Root>
    )
}
