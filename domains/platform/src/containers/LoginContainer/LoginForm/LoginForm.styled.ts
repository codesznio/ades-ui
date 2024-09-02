import styled from 'styled-components'

const Root = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.size6};
    max-width: 400px;

    > button {
        margin-top: 8px;
    }
`

const Error = styled.div`
    padding: ${({ theme }) => theme.layout.spacing.size6};
    width: 100%;
    border-radius: ${({ theme }) => theme.layout.radius.size4};
`

export const Layout = {
    Root,
    Error,
}
