import Div100vh from 'react-div-100vh'
import styled from 'styled-components'

const Root = styled(Div100vh)`
    background: ${({ theme }) => theme.color.background.tertiary};
    width: 100vw;
    overflow: hidden;
    padding: ${({ theme }) => theme.layout.spacing.size8};
`

export const Layout = {
    Root,
}
