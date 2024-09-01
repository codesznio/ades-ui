import { forwardRef } from 'react'

// Styling
import { Layout } from './Switch.styled'

export interface SwitchProps {
    palette?: {
        color?: string
    }
    checked: boolean
    onClick: () => void
}

export const Switch = forwardRef<HTMLDivElement, SwitchProps>(function Base(
    { checked, palette, onClick, ...rest },
    ref,
) {
    return (
        <Layout.Root ref={ref} {...rest}>
            <Layout.Toggle $color={palette?.color} checked={checked} type="checkbox" onClick={onClick} />
        </Layout.Root>
    )
})
