import styled from 'styled-components'

const Root = styled.li`
    transition: ${({ theme }) => theme.animation.css.transition.all};
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
`

export const Layout = {
    Root,
}
