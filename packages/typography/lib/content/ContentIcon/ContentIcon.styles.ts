import { ThemeInterface } from '@ades/styling'

// Types
import { ContentIconSizeType } from './ContentIconSize.type'

class ContentIcon {
    size(size: ContentIconSizeType, theme: ThemeInterface): string {
        return size === 'PRIMARY'
            ? `
            width: ${theme.layout.spacing.size12};
            height: ${theme.layout.spacing.size12};

            @media (min-width: ${theme.layout.breakpoint.tablet}) {
                width: ${theme.layout.spacing.size13};
                height: ${theme.layout.spacing.size13};
            }
        `
            : `
            width: ${theme.layout.spacing.size10};
            height: ${theme.layout.spacing.size10};

            @media (min-width: ${theme.layout.breakpoint.tablet}) {
                width: ${theme.layout.spacing.size11};
                height: ${theme.layout.spacing.size11};
            }
        `
    }
}

export const ContentIconStyles = new ContentIcon()
