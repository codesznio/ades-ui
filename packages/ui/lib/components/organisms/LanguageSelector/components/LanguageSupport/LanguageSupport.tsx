import { H3, P } from '@ades/typography'

// Styling
import { Layout } from './LanguageSupport.styled'

// Data
import { useLanguageSelectorContext } from '@/components/organisms/LanguageSelector/provider'

export function LanguageSupport() {
    const { support } = useLanguageSelectorContext()

    return (
        <Layout.Root>
            <H3 size="LEVEL6">{support?.title}</H3>
            <P color="SECONDARY">{support?.text}</P>
        </Layout.Root>
    )
}
