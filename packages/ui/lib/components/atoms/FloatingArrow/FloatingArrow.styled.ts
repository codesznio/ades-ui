// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable sonarjs/cognitive-complexity */
import styled from 'styled-components'
import { FloatingAnchorType } from '../FloatingElement/provider'

interface Props {
    $anchor?: FloatingAnchorType
    $background?: string
    $border?: string
}

const Root = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: ${({ $background, theme }) => $background || theme.color.background.secondary};
    box-shadow: 0px 0 5px 1px rgba(30, 30, 30, 0.075);
    border-radius: ${({ theme }) => theme.layout.radius.size3};
    border: 1px solid ${({ $border, theme }) => $border || theme.color.border.secondary};
`

const Triangle = styled.div<Props>`
    width: 10px;
    height: 10px;
    position: absolute;
    background: ${({ $background, theme }) => $background || theme.color.background.secondary};

    ${({ $anchor, $border, theme }) => {
        switch ($anchor) {
            case FloatingAnchorType.TOP_START:
                return `
                    border-left: 1px solid ${$border || theme.color.border.secondary};
                    border-bottom: 1px solid ${$border || theme.color.border.secondary};
                    left: 10px;
                    bottom: -6px;
                    transform: rotate(-45deg);
                `
            case FloatingAnchorType.TOP_END:
                return `
                    border-left: 1px solid ${$border || theme.color.border.secondary};
                    border-bottom: 1px solid ${$border || theme.color.border.secondary};
                    right: 10px;
                    bottom: -6px;
                    transform: rotate(-45deg);
                `
            case FloatingAnchorType.TOP:
                return `
                    border-left: 1px solid ${$border || theme.color.border.secondary};
                    border-bottom: 1px solid ${$border || theme.color.border.secondary};
                    left: 50%;
                    bottom: -6px;
                    transform:  translateX(-50%) rotate(-45deg);
                `
            case FloatingAnchorType.BOTTOM_START:
                return `
                    border-left: 1px solid ${$border || theme.color.border.secondary};
                    border-bottom: 1px solid ${$border || theme.color.border.secondary};
                    left: 10px;
                    top: -6px;
                    transform: rotate(135deg);
                `
            case FloatingAnchorType.BOTTOM_END:
                return `
                    border-left: 1px solid ${$border || theme.color.border.secondary};
                    border-top: 1px solid ${$border || theme.color.border.secondary};
                    right: 10px;
                    top: -6px;
                    transform: rotate(45deg);
                `
            case FloatingAnchorType.BOTTOM:
                return `
                    border-left: 1px solid ${$border || theme.color.border.secondary};
                    border-top: 1px solid ${$border || theme.color.border.secondary};
                    left: 50%;
                    top: -6px;
                    transform:  translateX(-50%) rotate(45deg);
                `
            case FloatingAnchorType.RIGHT_START:
                return `
                    border-left: 1px solid ${$border || theme.color.border.secondary};
                    border-bottom: 1px solid ${$border || theme.color.border.secondary};
                    left: -6px;
                    top: 10px;
                    transform: rotate(45deg);
                `
            case FloatingAnchorType.RIGHT_END:
                return `
                    border-left: 1px solid ${$border || theme.color.border.secondary};
                    border-bottom: 1px solid ${$border || theme.color.border.secondary};
                    left: -6px;
                    bottom: 10px;
                    transform: rotate(45deg);
                `
            case FloatingAnchorType.RIGHT:
                return `
                    border-left: 1px solid ${$border || theme.color.border.secondary};
                    border-bottom: 1px solid ${$border || theme.color.border.secondary};
                    left: -6px;
                    top: 50%;
                    transform: translateY(-50%) rotate(45deg);
                `
            case FloatingAnchorType.LEFT:
                return `
                    border-left: 1px solid ${$border || theme.color.border.secondary};
                    border-bottom: 1px solid ${$border || theme.color.border.secondary};
                    right: -6px;
                    top: 50%;
                    transform: translateY(-50%) rotate(-135deg);
                `
            case FloatingAnchorType.LEFT_END:
                return `
                    border-left: 1px solid ${$border || theme.color.border.secondary};
                    border-bottom: 1px solid ${$border || theme.color.border.secondary};
                    right: -6px;
                    bottom: 10px;
                    transform: rotate(-135deg);
                `
            case FloatingAnchorType.LEFT_START:
                return `
                    border-left: 1px solid ${$border || theme.color.border.secondary};
                    border-bottom: 1px solid ${$border || theme.color.border.secondary};
                    right: -6px;
                    top: 10px;
                    transform: rotate(-135deg);
                `
            default:
                return ``
        }
    }}
`

export const Layout = {
    Root,
    Triangle,
}
