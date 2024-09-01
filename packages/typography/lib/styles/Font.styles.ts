import { ThemeInterface } from '@ades/styling'

// Types
import { FontColorType, FontWeightType } from '@/types'

export class FontStyles {
    color(color: FontColorType, theme: ThemeInterface): string {
        switch (color) {
            case FontColorType.PRIMARY:
                return `color: ${theme.color.font.primary};`
            case FontColorType.SECONDARY:
                return `color: ${theme.color.font.secondary};`
            case FontColorType.TERTIARY:
                return `color: ${theme.color.font.tertiary};`
            case FontColorType.INVERSE:
                return `color: ${theme.color.font.inverse};`
            case FontColorType.ERROR:
                return `color: ${theme.color.font.error};`
            case FontColorType.INHERIT:
            default:
                return `color: inherit;`
        }
    }

    ellipse(): string {
        return `
            overflow: hidden; 
            white-space: nowrap; 
            text-overflow: ellipsis;
        `
    }

    weight(weight: FontWeightType, theme: ThemeInterface): string {
        switch (weight) {
            case FontWeightType.BOLD:
                return `font-weight: ${theme.typography.font.weight.BOLD};`
            case FontWeightType.MEDIUM:
                return `font-weight: ${theme.typography.font.weight.MEDIUM};`
            case FontWeightType.REGULAR:
                return `font-weight: ${theme.typography.font.weight.REGULAR};`
            case FontWeightType.SEMIBOLD:
                return `font-weight: ${theme.typography.font.weight.SEMIBOLD};`
            case FontWeightType.INHERIT:
            default:
                return `
                    font-size: inherit;
                    line-height: inherit;
                `
        }
    }
}

export const Font = new FontStyles()
