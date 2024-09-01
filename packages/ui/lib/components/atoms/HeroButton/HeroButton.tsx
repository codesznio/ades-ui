import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './HeroButton.styled'

export interface HeroButtonProps {
    disabled?: boolean
    full?: boolean
    type?: 'button' | 'submit'
    onClick?: () => void
}

export const HeroButton = forwardRef<HTMLButtonElement, PropsWithChildren<HeroButtonProps>>(function Base(
    { disabled = false, full = false, type = 'button', onClick, children, ...rest },
    ref,
) {
    return (
        <Layout.Root ref={ref} $full={full} disabled={disabled} type={type} onClick={onClick} {...rest}>
            {children}
        </Layout.Root>
    )
})
