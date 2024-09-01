import { CircleFlagLanguage } from 'react-circle-flags'

// Styling
import { Layout } from './SelectedLanguage.styled'

// Provier
import { useLanguageSelectorContext } from '@/components/organisms/LanguageSelector/provider'
import { P } from '@ades/typography'

export function SelectedLanguage() {
    const { config, selected, modal } = useLanguageSelectorContext()

    return (
        <Layout.Root $label={!!config?.label} onClick={() => modal.open()}>
            <CircleFlagLanguage height={config?.size || 34} languageCode={selected} width={config?.size || 34} />

            {config?.label && <P>{config?.label}</P>}
        </Layout.Root>
    )
}
