import { ElementCoordinates } from '@ades/hooks'
import { ThemeInterface } from '@ades/styling'

export class Dropdown {
    root(below: boolean, coordinates: ElementCoordinates | null, theme: ThemeInterface): string {
        const belowCSS = () => {
            if (below) {
                return `               
                    top: ${coordinates && coordinates.corners.bottom.left.y - coordinates.size.height + 1}px;
                    left: ${coordinates && coordinates.corners.bottom.left.x}px;
                    width: ${coordinates && coordinates.size.width}px;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    transform: translateY(-100%);
                    flex-direction: column-reverse;

                    > button {
                        &:first-child {
                            border: none;
                        }
                    }
                `
            } else {
                return `
                    top: ${coordinates && coordinates.corners.bottom.left.y - 1}px;
                    left: ${coordinates && coordinates.corners.bottom.left.x}px;
                    width: ${coordinates && coordinates.size.width}px;
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;

                    > button {
                        &:last-child {
                            border: none;
                        }
                    }
                `
            }
        }

        return `
            position: fixed;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            background: ${theme.color.background.primary};
            border: 1px solid ${theme.color.border.secondary};
            border-radius: ${theme.layout.radius.size4};

            @media (min-width: ${theme.layout.breakpoint.tablet}) {
                ${belowCSS()}
            }
        `
    }

    mobile(theme: ThemeInterface): string {
        return `
            border-radius: ${theme.layout.radius.size5};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            width: 100vw;
            max-height: 70vh;
            height: 100vh;
            background: ${theme.color.background.secondary};
            overflow: scroll;
        `
    }
}
export const DropdownStyles = new Dropdown()
