import { Dispatch, SetStateAction } from 'react'

// Packages
import { Drawer, HeroButton } from '@ades/ui'

// Styling
import { Layout } from './ErrorItemDrawer.styled'

export interface ErrorItemDrawer {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

export function ErrorItemDrawer({ open, setOpen }: ErrorItemDrawer) {
    return (
        <Drawer right active={open} close={() => setOpen(false)}>
            <Layout.Root>
                <Layout.Inner>
                    <Layout.Header></Layout.Header>
                    <Layout.Content></Layout.Content>
                    <Layout.Footer>
                        <HeroButton full>Raise Bug</HeroButton>
                    </Layout.Footer>
                </Layout.Inner>
            </Layout.Root>
        </Drawer>
    )
}
