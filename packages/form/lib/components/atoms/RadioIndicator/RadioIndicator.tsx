import { forwardRef } from 'react'

// Styling
import { Layout } from './RadioIndicator.styled'

export interface RadioIndicatorProps {
    checked: boolean
}

export const RadioIndicator = forwardRef<HTMLDivElement, RadioIndicatorProps>(function Base({ checked, ...rest }, ref) {
    return (
        <Layout.Root ref={ref} $checked={checked} {...rest}>
            {checked && <Layout.Inner />}
        </Layout.Root>
    )
})
