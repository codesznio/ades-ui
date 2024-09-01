import styled from 'styled-components'

interface Props {
    $label: boolean
}

const Root = styled.button<Props>`
    transition: ${({ theme }) => theme.animation.css.transition.all};

    ${({ $label, theme }) =>
        !$label
            ? `
        &:active {
            transform: scale(0.94);
        }
    `
            : `
            display: flex;
            align-items: center;
            gap: ${theme.layout.spacing.size6};
    `}
`

export const Layout = {
    Root,
}
