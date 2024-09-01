import { forwardRef, ReactNode } from 'react'

// Styling
import { Layout } from './Textarea.styled'

// Components
import { InputFooter, InputHeader } from '@/components/atoms'

export interface TextareaProps {
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
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
}

export const Textarea = forwardRef<HTMLDivElement, TextareaProps>(function Base(
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
    return (
        <Layout.Root ref={ref} {...rest}>
            {(label || hint) && <InputHeader hint={hint} id={id} label={label || ''} />}

            <Layout.Container $disabled={disabled} $readonly={readonly}>
                <Layout.Textarea
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
                />
            </Layout.Container>

            {(help || error) && <InputFooter error={error} help={help} />}
        </Layout.Root>
    )
})
