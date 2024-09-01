import styled from 'styled-components'

// Styles
import { InputStyles } from '@/styles/Input.styles'

const Root = styled.div`
    ${({ theme }) => InputStyles.root(theme)};
`

interface Props {
    $disabled: boolean
    $readonly: boolean
}

const Container = styled.div<Props>`
    ${({ $disabled, $readonly, theme }) => InputStyles.container($disabled, $readonly, theme)};
`

const Input = styled.input`
    ${({ theme }) => InputStyles.input(theme)};
`

const Trigger = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color.font.tertiary};
`

export const Layout = {
    Root,
    Container,
    Input,
    Trigger,
}
