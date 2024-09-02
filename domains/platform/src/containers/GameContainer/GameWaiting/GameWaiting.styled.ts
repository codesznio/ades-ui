import styled from 'styled-components'

const Root = styled.div`
    width: 600px;
    height: 600px;
    border-radius: ${({ theme }) => theme.layout.radius.size6};
    background: ${({ theme }) => theme.color.background.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Layout = {
    Root,
}
