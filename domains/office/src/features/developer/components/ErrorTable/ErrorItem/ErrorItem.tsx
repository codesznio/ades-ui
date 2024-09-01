import { useState } from 'react'
import * as dateFns from 'date-fns'
import { useTheme } from 'styled-components'

// Icons
import { CiMenuKebab } from 'react-icons/ci'

// Packages
import { P } from '@ades/typography'
import { Api } from '@ades/types'
import { ThemeInterface } from '@ades/styling'
import { Chip } from '@ades/ui'

// Styling
import { Layout } from './ErrorItem.styled'

// Components
import { ErrorItemDrawer } from '../ErrorItemDrawer'

export interface ErrorItemProps {
    error: Api.Error
}

export function ErrorItem({ error }: ErrorItemProps) {
    const theme: ThemeInterface = useTheme()
    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
            <Layout.Root onClick={() => setOpen(true)}>
                <Layout.Time color="SECONDARY" size="XS">
                    {dateFns.format(new Date(error.date), 'HH:mm:ss')}
                </Layout.Time>

                <Chip label={error.details.code.toString()} />

                <Layout.Info>
                    <P size="S" weight="SEMIBOLD">
                        {error.context.error
                            .replaceAll('_', ' ')
                            .toLowerCase()
                            .replace(/\b\w/g, (char) => char.toUpperCase())}
                    </P>
                </Layout.Info>

                <Chip
                    label={`${error.context.action
                        .replaceAll('_', ' ')
                        .toLowerCase()
                        .replace(/\b\w/g, (char) => char.toUpperCase())} - ${error.context.feature
                        .replaceAll('_', ' ')
                        .toLowerCase()
                        .replace(/\b\w/g, (char) => char.toUpperCase())}`}
                />

                <CiMenuKebab color={theme.color.font.tertiary} />
            </Layout.Root>

            <ErrorItemDrawer open={open} setOpen={setOpen} />
        </>
    )
}
