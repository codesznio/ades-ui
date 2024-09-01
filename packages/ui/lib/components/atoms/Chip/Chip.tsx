import { ReactNode, forwardRef } from 'react'

// Packages
import { Span } from '@ades/typography'

// Styling
import { Layout } from './Chip.styled'

// Type
import { ChipRadiusType } from './ChipRadius.type'

export interface ChipProps {
    config?: {
        palette?: {
            background?: string
            border?: string
            font?: string
        }
        radius?: ChipRadiusType
    }
    label: string
    leading?: ReactNode
    trailing?: ReactNode
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(function Base(
    { config = {}, label, leading, trailing, ...rest },
    ref,
) {
    const { radius = ChipRadiusType.S } = config

    return (
        <Layout.Root
            ref={ref}
            $background={config?.palette?.background}
            $border={config?.palette?.border}
            $font={config?.palette?.font}
            $radius={radius}
            {...rest}
        >
            {leading}
            <Span size="XS">{label}</Span>
            {trailing}
        </Layout.Root>
    )
})
