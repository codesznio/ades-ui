import Div100vh from 'react-div-100vh'
import styled from 'styled-components'

const Root = styled(Div100vh)`
    width: 500px;
    padding: ${({ theme }) => theme.layout.spacing.size6};
`

const Inner = styled.div`
    background: ${({ theme }) => theme.color.background.primary};
    border-radius: ${({ theme }) => theme.layout.radius.size4};
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

const Header = styled.div`
    padding: ${({ theme }) => theme.layout.spacing.size6};
    border-bottom: 1px solid ${({ theme }) => theme.color.border.secondary};
`

const Content = styled.div`
    padding: ${({ theme }) => theme.layout.spacing.size6};
    flex-grow: 1;
`

const Footer = styled.div`
    padding: ${({ theme }) => theme.layout.spacing.size6};
    border-top: 1px solid ${({ theme }) => theme.color.border.secondary};
`

export const Layout = {
    Root,
    Inner,
    Header,
    Content,
    Footer,
}
