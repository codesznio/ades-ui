import { ThemeInterface } from '@ades/styling'

class Input {
    container(disabled: boolean, readonly: boolean, theme: ThemeInterface): string {
        return `
            display: flex;
            align-items: center;
            border-radius: ${theme.layout.radius.size3};
            transition: ${theme.animation.css.transition.all};
            padding: 0 ${theme.layout.spacing.size6};
            gap: ${theme.layout.spacing.size6};
            border: 1px solid ${theme.color.border.secondary};
            height: 48px;


            ${
                (disabled || readonly) &&
                `
                outline: none;
                cursor: not-allowed;
                background: ${theme.color.background.secondary};
            `
            }
        `
    }

    dropdown(active: boolean, below: boolean, theme: ThemeInterface): string {
        const isActive = () => {
            return below
                ? `               
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            `
                : `
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            `
        }

        return `
            @media (min-width: ${theme.layout.breakpoint.tablet}) {
                ${active && isActive()}}
            }
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

    root(theme: ThemeInterface): string {
        return `                    
            width: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: ${theme.layout.spacing.size4};
        `
    }
}

export const InputStyles = new Input()
