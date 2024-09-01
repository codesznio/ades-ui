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

export const Layout = {
    Root,
    Container,
    Input,
}
