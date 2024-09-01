import { ThemeInterface } from '@ades/styling'

// Types
import { BodySizeType } from '@/types'

class BodyStyles {
    size(size: BodySizeType, theme: ThemeInterface): string {
        switch (size) {
            case BodySizeType.XL:
                return `
                    font-size: ${theme.typography.body.size.XL};
                    line-height: ${theme.typography.body.height.XL};
                `
            case BodySizeType.L:
                return `
                    font-size: ${theme.typography.body.size.L};
                    line-height: ${theme.typography.body.height.L};
                `
            case BodySizeType.M:
                return `
                    font-size: ${theme.typography.body.size.M};
                    line-height: ${theme.typography.body.height.M};
                `
            case BodySizeType.S:
                return `
                    font-size: ${theme.typography.body.size.S};
                    line-height: ${theme.typography.body.height.S};
                `
            case BodySizeType.XS:
                return `
                    font-size: ${theme.typography.body.size.XS};
                    line-height: ${theme.typography.body.height.XS};
                `
            case BodySizeType.INHERIT:
            default:
                return `
                    font-size: inherit;
                    line-height: inherit;
                `
        }
    }
}

export const Body = new BodyStyles()
