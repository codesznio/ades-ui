import { ReactNode, forwardRef } from 'react'

import { Label } from '@ades/typography'

// Styling
import { Layout } from './InputHeader.styled'

export interface InputHeaderProps {
    id: string
    label?: string
    hint?: ReactNode
}

export const InputHeader = forwardRef<HTMLDivElement, InputHeaderProps>(function Base(
    { id, label, hint, ...rest },
    ref,
) {
    return (
        <Layout.Root {...rest} ref={ref}>
            <Label htmlFor={id} size="S" weight="MEDIUM">
                {label}
            </Label>

            {hint}
        </Layout.Root>
    )
})
