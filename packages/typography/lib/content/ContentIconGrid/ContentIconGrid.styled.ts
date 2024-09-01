import styled from 'styled-components'

const Root = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Inner = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.layout.spacing.size6};
    justify-content: center;
    align-items: center;
    padding: 0;

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        gap: ${({ theme }) => theme.layout.spacing.size9};
        max-width: ${({ theme }) => theme.layout.width.size7};
        padding: 0 ${({ theme }) => theme.layout.spacing.size9};
    }
`

export const Layout = {
    Root,
    Inner,
}
