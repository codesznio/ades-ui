// Styling
import { Layout } from './LanguageSelectorInner.styled'

// Context
import { useLanguageSelectorContext } from '@/components/organisms/LanguageSelector/provider'

// Components
import { Modal } from '@/components/molecules'
import { SelectedLanguage } from '../SelectedLanguage'
import { LanguageList } from '../LanguageList'
import { LanguageSupport } from '../LanguageSupport'

export function LanguageSelectorInner() {
    const { modal, supported } = useLanguageSelectorContext()

    return (
        <Layout.Root>
            <SelectedLanguage />

            <Modal active={modal.active} close={modal.close}>
                {supported.length > 1 ? <LanguageList /> : <LanguageSupport />}
            </Modal>
        </Layout.Root>
    )
}
