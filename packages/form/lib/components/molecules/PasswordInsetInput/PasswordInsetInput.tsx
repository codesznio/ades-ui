import { forwardRef, useState } from 'react'

// Icons
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'

// Packages
import { Label } from '@ades/typography'

// Styling
import { Layout } from './PasswordInsetInput.styled'

export interface PasswordInsetInputProps {
    autoCapitalize?: boolean
    autoComplete?: boolean
    autoCorrect?: boolean
    disabled?: boolean
    id: string
    label: string
    placeholder?: string
    readonly?: boolean
    type?: string
    value?: string
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const PasswordInsetInput = forwardRef<HTMLDivElement, PasswordInsetInputProps>(function Base(
    {
        autoCapitalize = false,
        autoComplete = false,
        autoCorrect = false,
        disabled = false,
        id,
        label,
        placeholder,
        readonly = false,
        type,
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
        <Layout.Root ref={ref} $disabled={disabled} $readonly={readonly}>
            <Layout.Container>
                <Label htmlFor={id} size="XS" weight="MEDIUM">
                    {label}
                </Label>

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
            </Layout.Container>

            <Layout.Trigger type="button" onClick={() => setHidden(!hidden)}>
                {hidden ? <FaEyeSlash size="18px" /> : <FaEye size="18px" />}
            </Layout.Trigger>
        </Layout.Root>
    )
})
