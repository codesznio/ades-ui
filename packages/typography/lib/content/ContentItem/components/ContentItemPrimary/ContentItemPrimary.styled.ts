import styled from 'styled-components'

// Types
import { ContentAlignType, FlexDirectionType } from '@/types'

interface RootProps {
    $align: ContentAlignType
    $direction: FlexDirectionType
}

const Root = styled.div<RootProps>`
    display: flex;
    flex-direction: ${({ $direction }) => ($direction === FlexDirectionType.COLUMN ? 'column' : 'row')};
    gap: ${({ theme }) => theme.layout.spacing.size6};

    ${({ $align }) => {
        switch ($align) {
            case ContentAlignType.CENTER:
                return `
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                `
            case ContentAlignType.RIGHT:
                return `
                    text-align: right;
                    align-items: flex-end;
                    justify-content: flex-end;
                `
            case ContentAlignType.LEFT:
            default:
                return `
                    text-align: left;
                    align-items: flex-start;
                    justify-content: flex-start;
                `
        }
    }}
`

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.size5};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        gap: ${({ theme }) => theme.layout.spacing.size6};
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        gap: ${({ theme }) => theme.layout.spacing.size2};
    }
`

export const Layout = {
    Root,
    Inner,
    Content,
}
