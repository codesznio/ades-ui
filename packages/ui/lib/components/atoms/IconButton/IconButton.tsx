import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './IconButton.styled'

export interface IconButtonProps {
    disabled?: boolean
    type?: 'button' | 'submit'
    onClick: () => void
}

export const IconButton = forwardRef<HTMLButtonElement, PropsWithChildren<IconButtonProps>>(function Base(
    { disabled = false, type = 'button', children, ...rest },
    ref,
) {
    return (
        <Layout.Root ref={ref} disabled={disabled} type={type} {...rest}>
            {children}
        </Layout.Root>
    )
})
