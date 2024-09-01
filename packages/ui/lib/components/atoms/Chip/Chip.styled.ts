import styled from 'styled-components'
import { ChipRadiusType } from './ChipRadius.type'

interface Props {
    $background?: string
    $border?: string
    $font?: string
    $radius: ChipRadiusType
}

const Root = styled.div<Props>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.layout.spacing.size3};
    padding: ${({ theme }) => theme.layout.spacing.size2} ${({ theme }) => theme.layout.spacing.size5};

    ${({ $background, theme }) =>
        $background ? `background: ${$background};` : `background: ${theme.color.background.secondary};`}

    ${({ $border, theme }) =>
        $border ? `border: 1px solid ${$border};` : `border: 1px solid ${theme.color.border.secondary};`}

    ${({ $font, theme }) => ($font ? `color:${$font};` : `color: ${theme.color.font.secondary};`)}


    ${({ $radius, theme }) => {
        switch ($radius) {
            case ChipRadiusType.L:
                return `border-radius: ${theme.layout.radius.size7};`
            case ChipRadiusType.M:
                return `border-radius: ${theme.layout.radius.size5};`
            case ChipRadiusType.S:
            default:
                return `border-radius: ${theme.layout.radius.size3};`
        }
    }};
`

export const Layout = {
    Root,
}
