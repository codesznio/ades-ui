import styled from 'styled-components'

const Root = styled.div`
    background: ${({ theme }) => theme.color.background.secondary};
    border-radius: ${({ theme }) => theme.layout.radius.size4};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.size6};
    padding: ${({ theme }) => theme.layout.spacing.size9};
    text-align: left;
    width: 100vw;

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        border-radius: ${({ theme }) => theme.layout.radius.size4};
        max-width: ${({ theme }) => theme.layout.width.size4};
    }
`

export const Layout = {
    Root,
}
