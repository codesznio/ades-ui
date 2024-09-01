import { forwardRef, ReactNode, useState } from 'react'

// Icons
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'

// Styling
import { Layout } from './PasswordInput.styled'

// Components
import { InputHeader, InputFooter } from '@/components/atoms'

export interface PasswordInputProps {
    autoCapitalize?: boolean
    autoComplete?: boolean
    autoCorrect?: boolean
    disabled?: boolean
    error?: string
    help?: string
    hint?: ReactNode
    id: string
    label?: string
    placeholder?: string
    readonly?: boolean
    value?: string
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const PasswordInput = forwardRef<HTMLDivElement, PasswordInputProps>(function Base(
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
        placeholder,
        readonly = false,
        value,
        onBlur,
        onChange,
        onFocus,
        ...rest
    },
    ref,
) {
    const [hidden, setHidden] = useState<boolean>(true)

    return (
        <Layout.Root ref={ref}>
            {(label || hint) && <InputHeader hint={hint} id={id} label={label || ''} />}

            <Layout.Container $disabled={disabled} $readonly={readonly}>
                <Layout.Input
                    autoCapitalize={autoCapitalize ? 'on' : 'off'}
                    autoComplete={autoComplete ? 'on' : 'off'}
                    autoCorrect={autoCorrect ? 'on' : 'off'}
                    disabled={disabled}
                    id={id}
                    placeholder={placeholder}
                    readOnly={readonly}
                    type={hidden ? 'password' : 'text'}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    onFocus={onFocus}
                    {...rest}
                />
                <Layout.Trigger type="button" onClick={() => setHidden(!hidden)}>
                    {hidden ? <FaEyeSlash size="18px" /> : <FaEye size="18px" />}
                </Layout.Trigger>
            </Layout.Container>

            {(help || error) && <InputFooter error={error} help={help} />}
        </Layout.Root>
    )
})
