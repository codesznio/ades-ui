import styled from 'styled-components'

const Root = styled.div`
    background: ${({ theme }) => theme.color.background.secondary};
    border-radius: ${({ theme }) => theme.layout.radius.size4};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100vw;
    overflow: hidden;

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        border-radius: ${({ theme }) => theme.layout.radius.size4};
        max-width: 480px;
    }
`

export const Layout = {
    Root,
}
