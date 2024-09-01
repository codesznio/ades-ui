import { forwardRef } from 'react'

// Packages
import { P } from '@ades/typography'

// Styling
import { Layout } from './InputFooter.styled'

export interface InputFooterProps {
    help?: string
    error?: string
}

export const InputFooter = forwardRef<HTMLDivElement, InputFooterProps>(function Base({ error, help, ...rest }, ref) {
    return (
        <Layout.Root {...rest} ref={ref}>
            {error ? (
                <P color="ERROR" size="S">
                    {error}
                </P>
            ) : (
                <P color="TERTIARY" size="S">
                    {help}
                </P>
            )}
        </Layout.Root>
    )
})
