import { ThemeInterface } from '@ades/styling'

class TextareaStyles {
    container($disabled: boolean, $readonly: boolean, theme: ThemeInterface) {
        return `
            display: flex;
            align-items: center;
            border-radius: ${theme.layout.radius.size4};
            transition: ${theme.animation.css.transition.all};
            border: 1px solid ${theme.color.border.primary};
            padding: ${theme.layout.spacing.size5};
            gap: ${theme.layout.spacing.size6};

            ${
                ($disabled || $readonly) &&
                `
                background: ${theme.color.background.secondary};
                outline: none;
                cursor: not-allowed;
            `
            }
        `
    }

    textarea(theme: ThemeInterface) {
        return `
            width: 100%;
            height: 100%;
            outline: none;
            border: none;
            border-radius: ${theme.layout.radius.size3};
            font-family: ${theme.typography.font.family.primary};
            flex-grow: 1;
            font-size: ${theme.typography.body.size.S};
            line-height: ${theme.typography.body.height.S};
            background: transparent;
            resize: none;
        `
    }

    root(theme: ThemeInterface) {
        return `                    
            width: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: ${theme.layout.spacing.size4};
            color: ${theme.color.font.tertiary};
        `
    }
}

export const TextareaStyle = new TextareaStyles()
