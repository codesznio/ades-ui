import { ThemeInterface } from '@ades/styling'

// Styles
import { HeadingSizeType } from '@/types'

class HeadingStyles {
    size(size: HeadingSizeType, theme: ThemeInterface): string {
        switch (size) {
            case HeadingSizeType.LEVEL1:
                return `
                    font-size: ${theme.typography.heading.size.LEVEL1};
                    line-height: ${theme.typography.heading.height.LEVEL1};
                `
            case HeadingSizeType.LEVEL2:
                return `
                    font-size: ${theme.typography.heading.size.LEVEL2};
                    line-height: ${theme.typography.heading.height.LEVEL2};
                `
            case HeadingSizeType.LEVEL3:
                return `
                    font-size: ${theme.typography.heading.size.LEVEL3};
                    line-height: ${theme.typography.heading.height.LEVEL3};
                `
            case HeadingSizeType.LEVEL4:
                return `
                    font-size: ${theme.typography.heading.size.LEVEL4};
                    line-height: ${theme.typography.heading.height.LEVEL4};
                `
            case HeadingSizeType.LEVEL5:
                return `
                    font-size: ${theme.typography.heading.size.LEVEL5};
                    line-height: ${theme.typography.heading.height.LEVEL5};
                `
            case HeadingSizeType.LEVEL6:
                return `
                    font-size: ${theme.typography.heading.size.LEVEL6};
                    line-height: ${theme.typography.heading.height.LEVEL6};
                `
            case HeadingSizeType.INHERIT:
            default:
                return `
                    font-size: inherit;
                    line-height: inherit;
                `
        }
    }
}

export const Heading = new HeadingStyles()
