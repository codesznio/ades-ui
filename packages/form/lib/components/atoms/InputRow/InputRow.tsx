import { PropsWithChildren, forwardRef, Children } from 'react'

// Styling
import { Layout } from './InputRow.styled'

export interface InputRowProps {}

export const InputRow = forwardRef<HTMLDivElement, PropsWithChildren<InputRowProps>>(function Base(
    { children, ...rest },
    ref,
) {
    return (
        <Layout.Root ref={ref} columns={Children.toArray(children).length} {...rest}>
            {children}
        </Layout.Root>
    )
})
