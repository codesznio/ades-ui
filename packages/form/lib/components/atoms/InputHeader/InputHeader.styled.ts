import styled from 'styled-components'

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: ${({ theme }) => theme.layout.spacing.size2};
`

export const Layout = {
    Root,
}
