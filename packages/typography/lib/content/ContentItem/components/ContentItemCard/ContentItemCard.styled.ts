import styled from 'styled-components'

const Root = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.layout.spacing.size8};
    background: ${({ theme }) => theme.color.background.secondary};
    gap: ${({ theme }) => theme.layout.spacing.size12};
`

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.size6};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        gap: ${({ theme }) => theme.layout.spacing.size7};
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.size2};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        gap: ${({ theme }) => theme.layout.spacing.size4};
    }
`

export const Layout = {
    Root,
    Inner,
    Content,
}
