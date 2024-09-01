import styled from 'styled-components'

// Utils
import { InputStyles, InsetInputStyles } from '@/styles'

interface Props {
    $disabled: boolean
    $readonly: boolean
}

const Root = styled.div<Props>`
    ${({ $disabled, $readonly, theme }) => InsetInputStyles.root($disabled, $readonly, theme)};
`

const Container = styled.div`
    ${({ theme }) => InsetInputStyles.container(theme)};
`

const Input = styled.input`
    ${({ theme }) => InputStyles.input(theme)};
`

const Trigger = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${({ theme }) => theme.layout.spacing.size3};
    color: ${({ theme }) => theme.color.font.tertiary};
`

export const Layout = {
    Root,
    Container,
    Input,
    Trigger,
}
