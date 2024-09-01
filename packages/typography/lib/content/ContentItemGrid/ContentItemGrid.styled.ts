import styled from 'styled-components'

// Types
import { GridColumnType } from '@/types/GridColumns.type'
import { ContentAlignType } from '@/types'

// Styles
import { GridStyles } from '@/styles'

const Root = styled.div`
    padding: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        gap: ${({ theme }) => theme.layout.spacing.size9};
    }
`

interface Props {
    $align: ContentAlignType
    $columns: GridColumnType
}

const Inner = styled.div<Props>`
    display: grid;

    ${({ $columns, theme }) => GridStyles.format($columns, theme)};

    ${({ $align, theme }) =>
        $align === ContentAlignType.CENTER &&
        `
        max-width: ${theme.layout.width.size2};

        @media (min-width: ${theme.layout.breakpoint.tablet}) {
            max-width: ${theme.layout.width.size8};
        }
    `}
`

export const Layout = {
    Root,
    Inner,
}
