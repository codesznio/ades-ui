import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './InsetInputGroup.styled'

export const InsetInputGroup = forwardRef<HTMLDivElement, PropsWithChildren>(function Base({ children, ...rest }, ref) {
    return (
        <Layout.Root ref={ref} {...rest}>
            {children}
        </Layout.Root>
    )
})
