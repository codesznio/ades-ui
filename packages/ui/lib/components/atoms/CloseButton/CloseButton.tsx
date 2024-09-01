import { forwardRef } from 'react'

// Icons
import { IoClose } from 'react-icons/io5'

// Styling
import { Root } from './CloseButton.styled'

// Types
import { CloseButtonSizeType } from './CloseButtonSize.type'

export interface CloseButtonProps {
    disabled?: boolean
    size?: CloseButtonSizeType
    onClick: () => void
}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(function Base(
    { disabled = false, size = CloseButtonSizeType.M, onClick, ...rest },
    ref,
) {
    return (
        <Root ref={ref} $size={size} disabled={disabled} type="button" onClick={onClick} {...rest}>
            <IoClose size={size === CloseButtonSizeType.L ? '24px' : '20px'} />
        </Root>
    )
})
