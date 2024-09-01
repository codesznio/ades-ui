import styled from 'styled-components'

const Root = styled.div`
    background: ${({ theme }) => theme.color.background.primary};
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.layout.radius.size4};
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.color.border.secondary};
`

const Header = styled.div`
    padding: ${({ theme }) => theme.layout.spacing.size6};
    border-bottom: 1px solid ${({ theme }) => theme.color.border.secondary};
`

const Content = styled.div`
    flex-grow: 1;
    overflow: scroll;
`

const Footer = styled.div``

export const Layout = {
    Root,
    Header,
    Content,
    Footer,
}
