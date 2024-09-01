import styled from 'styled-components'

import { P } from '@ades/typography'

interface Props {
    selected: boolean
}

const Root = styled.button<Props>`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.layout.spacing.size5} ${({ theme }) => theme.layout.spacing.size8};
    transition: ${({ theme }) => theme.animation.css.transition.all};
    gap: ${({ theme }) => theme.layout.spacing.size4};
    width: 100%;
    text-align: left;
    border-top: 1px solid ${({ theme }) => theme.color.border.secondary};

    &:hover {
        background: ${({ theme }) => theme.color.background.primary};
    }
`

export const Layout = {
    Root,
}

const Name = styled(P)`
    flex-grow: 1;
`

export const Text = {
    Name,
}
