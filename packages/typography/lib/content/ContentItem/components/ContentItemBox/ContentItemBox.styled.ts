import styled from 'styled-components'

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div:first-child {
        transform: translateY(20px);

        @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
            transform: translateY(24px);
        }
    }
`

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: ${({ theme }) => theme.layout.spacing.size6};
    background: ${({ theme }) => theme.color.background.secondary};
    border-radius: ${({ theme }) => theme.layout.radius.size6};
    padding: ${({ theme }) => theme.layout.spacing.size10} ${({ theme }) => theme.layout.spacing.size8};

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
