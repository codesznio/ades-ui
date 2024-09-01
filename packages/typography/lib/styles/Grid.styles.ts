import { ThemeInterface } from '@ades/styling'

class Grid {
    format(columns: number, theme: ThemeInterface) {
        switch (columns) {
            case 1:
                return `
                    grid-template-columns: repeat(1, 1fr);
                    gap: ${theme.layout.spacing.size10};
                `
            case 2:
                return `
                    grid-template-columns: repeat(1, 1fr);
                    gap: ${theme.layout.spacing.size10};

                    @media (min-width: ${theme.layout.breakpoint.tablet}) {
                        grid-template-columns: repeat(2, 1fr);
                        gap: ${theme.layout.spacing.size11} ${theme.layout.spacing.size9};
                    }
                `
            case 3:
                return `
                    grid-template-columns: repeat(1, 1fr);
                    gap: ${theme.layout.spacing.size10};

                    @media (min-width: ${theme.layout.breakpoint.tablet}) {
                        grid-template-columns: repeat(2, 1fr);
                        gap: ${theme.layout.spacing.size11} ${theme.layout.spacing.size9};
                    }

                    @media (min-width: ${theme.layout.breakpoint.laptop}) {
                        grid-template-columns: repeat(3, 1fr);
                        gap: ${theme.layout.spacing.size12} ${theme.layout.spacing.size9};
                    }
                `
            case 4:
                return `
                    grid-template-columns: repeat(1, 1fr);
                    gap: ${theme.layout.spacing.size10};

                    @media (min-width: ${theme.layout.breakpoint.tablet}) {
                        grid-template-columns: repeat(2, 1fr);
                        gap: ${theme.layout.spacing.size11} ${theme.layout.spacing.size9};
                    }

                    @media (min-width: ${theme.layout.breakpoint.laptop}) {
                        grid-template-columns: repeat(4, 1fr);
                        gap: ${theme.layout.spacing.size12} ${theme.layout.spacing.size8};
                    }
                `
            default:
                return ``
        }
    }
}

export const GridStyles = new Grid()
