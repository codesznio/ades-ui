import styled from 'styled-components'

// Types
import { FontColorType, FontWeightType, HeadingSizeType } from '@/types'

// Styles
import { Heading, Font } from '@/styles'

interface Props {
    $color: FontColorType
    $ellipse: boolean
    $size: HeadingSizeType
    $weight: FontWeightType
}

export const Root = styled.h1<Props>`
    margin: 0;
    padding: 0;
    transition: ${({ theme }) => theme.animation.css.transition.all};

    ${({ $color, theme }) => Font.color($color, theme)}
    ${({ $ellipse }) => $ellipse && Font.ellipse()}
    ${({ $weight, theme }) => Font.weight($weight, theme)}
    ${({ $size, theme }) => Heading.size($size, theme)}
`
