import styled from 'styled-components'

// Styles
import { TextareaStyle } from './Textarea.styles'

const Root = styled.div`
    ${({ theme }) => TextareaStyle.root(theme)};
`

interface Props {
    $disabled: boolean
    $readonly: boolean
}

const Container = styled.div<Props>`
    ${({ $disabled, $readonly, theme }) => TextareaStyle.container($disabled, $readonly, theme)};
`

const Textarea = styled.textarea`
    ${({ theme }) => TextareaStyle.textarea(theme)};

    min-height: 100px;
    outline: none;
`

export const Layout = {
    Root,
    Container,
    Textarea,
}
