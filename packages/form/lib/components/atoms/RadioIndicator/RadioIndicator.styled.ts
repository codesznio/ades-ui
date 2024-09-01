import styled from 'styled-components'

interface Props {
    $checked: boolean
}

const Root = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18px;
    width: 18px;
    background: ${({ theme }) => theme.color.background.secondary};
    border-radius: ${({ theme }) => theme.layout.radius.circle};
    transition: ${({ theme }) => theme.animation.css.transition.all};
    border: 1px solid ${({ theme }) => theme.color.border.primary};
    flex-shrink: 0;

    ${({ $checked }) =>
        $checked &&
        `
        background: blue;
        border: 1px solid blue;
    `}
`

const Inner = styled.span`
    width: 6px;
    height: 6px;
    border-radius: ${({ theme }) => theme.layout.radius.circle};
    background: white;
`

export const Layout = {
    Root,
    Inner,
}
