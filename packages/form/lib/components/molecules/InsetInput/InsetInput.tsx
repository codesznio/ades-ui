import { forwardRef } from 'react'

// Packages
import { Label } from '@ades/typography'

// Styling
import { Layout } from './InsetInput.styled'

export interface InsetInputProps {
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

export const InsetInput = forwardRef<HTMLDivElement, InsetInputProps>(function Base(
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
                    type={type}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    onFocus={onFocus}
                    {...rest}
                />
            </Layout.Container>
        </Layout.Root>
    )
})
