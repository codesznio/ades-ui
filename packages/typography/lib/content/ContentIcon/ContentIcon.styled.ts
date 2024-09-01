import styled from 'styled-components'

// Type
import { ContentIconRadiusType } from './ContentIconRadius.type'
import { ContentIconSizeType } from './ContentIconSize.type'
import { ContentIconStyles } from './ContentIcon.styles'

interface Props {
    $background: string
    $border: string
    $color: string
    $radius: ContentIconRadiusType
    $size: ContentIconSizeType
}

const Root = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${({ theme }) => theme.animation.css.transition.all};
    background: ${({ $background }) => $background};
    border: 1px solid ${({ $border }) => $border};
    color: ${({ $color }) => $color};
    flex-shrink: 0;

    ${({ $radius, theme }) => {
        switch ($radius) {
            case ContentIconRadiusType.CIRCLE:
                return `border-radius: ${theme.layout.radius.circle};`
            case ContentIconRadiusType.SQUARE:
                return `border-radius: 0;`
            case ContentIconRadiusType.ROUNDED:
            default:
                return `border-radius: ${theme.layout.radius.size4};`
        }
    }}

    ${({ $size, theme }) => ContentIconStyles.size($size, theme)};
`

export const Layout = {
    Root,
}
