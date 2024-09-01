import { ReactNode, forwardRef } from 'react'

// Styling
import { Layout } from './Input.styled'

// Components
import { InputHeader, InputFooter } from '@/components/atoms'

export interface InputProps {
    autoCapitalize?: boolean
    autoComplete?: boolean
    autoCorrect?: boolean
    disabled?: boolean
    error?: string
    help?: string
    hint?: ReactNode
    id: string
    label?: string
    leading?: ReactNode
    placeholder?: string
    readonly?: boolean
    trailing?: ReactNode
    value?: string
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const Input = forwardRef<HTMLDivElement, InputProps>(function Base(
    {
        autoCapitalize = false,
        autoComplete = false,
        autoCorrect = false,
        disabled = false,
        error,
        help,
        hint,
        id,
        label,
        leading,
        placeholder,
        readonly = false,
        trailing,
        value,
        onBlur,
        onChange,
        onFocus,
        ...rest
    },
    ref,
) {
    return (
        <Layout.Root ref={ref}>
            {(label || hint) && <InputHeader hint={hint} id={id} label={label || ''} />}

            <Layout.Container $disabled={disabled} $readonly={readonly}>
                {leading}
                <Layout.Input
                    autoCapitalize={autoCapitalize ? 'on' : 'off'}
                    autoComplete={autoComplete ? 'on' : 'off'}
                    autoCorrect={autoCorrect ? 'on' : 'off'}
                    disabled={disabled}
                    id={id}
                    placeholder={placeholder}
                    readOnly={readonly}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    onFocus={onFocus}
                    {...rest}
                />
                {trailing}
            </Layout.Container>

            {(help || error) && <InputFooter error={error} help={help} />}
        </Layout.Root>
    )
})
