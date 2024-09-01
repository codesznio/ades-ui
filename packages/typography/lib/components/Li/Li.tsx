import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './Li.styled'

export const Li = forwardRef<HTMLLIElement, PropsWithChildren>(function Base({ children, ...rest }, ref) {
    return (
        <Layout.Root ref={ref} {...rest}>
            {children}
        </Layout.Root>
    )
})
