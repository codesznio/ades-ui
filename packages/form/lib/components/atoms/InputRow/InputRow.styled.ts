import styled from 'styled-components'

interface Props {
    columns: number
}

const Root = styled.div<Props>`
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
    gap: ${({ theme }) => theme.layout.spacing.size6};
`

export const Layout = {
    Root,
}
