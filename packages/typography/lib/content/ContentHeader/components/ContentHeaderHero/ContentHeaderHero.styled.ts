import styled from 'styled-components'

// Types
import { ContentAlignType } from '@/types'

// Styles
import { AlignStyles } from '@/styles/Align.styles'

interface Props {
    $align: ContentAlignType
}

const Root = styled.div<Props>`
    width: 100%;
    display: flex;

    ${({ $align }) => AlignStyles.align($align)};
`

const Inner = styled.div<Props>`
    display: flex;
    flex-direction: column;
    max-width: ${({ theme }) => theme.layout.width.size6};
    gap: ${({ theme }) => theme.layout.spacing.size5};

    ${({ $align }) => AlignStyles.align($align)};
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.size6};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        gap: ${({ theme }) => theme.layout.spacing.size7};
    }
`

export const Layout = {
    Root,
    Inner,
    Content,
}
