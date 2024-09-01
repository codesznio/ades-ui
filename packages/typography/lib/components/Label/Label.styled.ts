import styled from 'styled-components'

// Types
import { BodySizeType, FontColorType, FontWeightType } from '@/types'

// Styles
import { Body, Font } from '@/styles'

interface Props {
    $color: FontColorType
    $ellipse: boolean
    $size: BodySizeType
    $weight: FontWeightType
}

export const Root = styled.label<Props>`
    margin: 0;
    padding: 0;
    transition: ${({ theme }) => theme.animation.css.transition.all};

    ${({ $color, theme }) => Font.color($color, theme)}
    ${({ $ellipse }) => $ellipse && Font.ellipse()}
    ${({ $weight, theme }) => Font.weight($weight, theme)}
    ${({ $size, theme }) => Body.size($size, theme)}
`
