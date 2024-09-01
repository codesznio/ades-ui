import styled from 'styled-components'

// Styles
import { Body, Font } from '@/styles'

// Types
import { BodySizeType, FontColorType, FontWeightType, ListStyleType } from '@/types'

interface Props {
    $color: FontColorType
    $ellipse: boolean
    $size: BodySizeType
    $type: ListStyleType
    $weight: FontWeightType
}

const Root = styled.ul<Props>`
    margin: 0;
    padding: 0;
    transition: ${({ theme }) => theme.animation.css.transition.all};
    list-style-type: ${({ $type }) => $type};

    ${({ $color, theme }) => Font.color($color, theme)}
    ${({ $ellipse }) => $ellipse && Font.ellipse()}
    ${({ $weight, theme }) => Font.weight($weight, theme)}
    ${({ $size, theme }) => Body.size($size, theme)}
`

export const Layout = {
    Root,
}
