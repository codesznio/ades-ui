import { ThemeInterface } from '@ades/styling'

class InsetInput {
    container(theme: ThemeInterface): string {
        return `
            display: flex;
            flex-direction: column;
            gap: ${theme.layout.spacing.size1};
            flex-grow: 1;
            border-radius: ${theme.layout.radius.size3};
        `
    }

    input(theme: ThemeInterface): string {
        return `            
            flex-grow: 1;
            width: 100%;
            background: transparent;
            font-size: ${theme.typography.body.size.S};
        `
    }

    root($disabled: boolean, $readonly: boolean, theme: ThemeInterface): string {
        return `    
                width: 100%;
                padding: ${theme.layout.spacing.size4} ${theme.layout.spacing.size5};
                display: flex;
                border-radius: ${theme.layout.radius.size3};
                transition: ${theme.animation.css.transition.all};
                gap: ${theme.layout.spacing.size5};
                overflow: hidden;
                text-align: left;
            
                &:focus-within {
                    background: ${theme.color.background.primary};
                }

                ${
                    ($disabled || $readonly) &&
                    `
                    background: ${theme.color.background.primary};
                    outline: none;
                    cursor: not-allowed;
                `
                }
            `
    }
}

export const InsetInputStyles = new InsetInput()
