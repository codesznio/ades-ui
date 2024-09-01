import styled from 'styled-components'

const Root = styled.div`
    display: flex;
    flex-direction: column;
    transition: ${({ theme }) => theme.animation.css.transition.all};
    border: 1px solid ${({ theme }) => theme.color.border.primary};
    border-radius: ${({ theme }) => theme.layout.radius.size4};

    > div {
        border-radius: 0;
        border-bottom: 1px solid ${({ theme }) => theme.color.border.primary};

        &:first-child {
            border-top-left-radius: ${({ theme }) => theme.layout.radius.size4};
            border-top-right-radius: ${({ theme }) => theme.layout.radius.size4};
        }

        &:last-child {
            border-bottom-left-radius: ${({ theme }) => theme.layout.radius.size4};
            border-bottom-right-radius: ${({ theme }) => theme.layout.radius.size4};
            border-bottom: 1px solid transparent;
        }
    }
`

export const Layout = {
    Root,
}
