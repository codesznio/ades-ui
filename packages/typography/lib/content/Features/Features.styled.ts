import styled from 'styled-components'

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.layout.spacing.size11};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        gap: ${({ theme }) => theme.layout.spacing.size12};
        max-width: ${({ theme }) => theme.layout.width.size8};
        padding: 0 ${({ theme }) => theme.layout.spacing.size9};
    }
`

export const Layout = {
    Root,
    Inner,
}
