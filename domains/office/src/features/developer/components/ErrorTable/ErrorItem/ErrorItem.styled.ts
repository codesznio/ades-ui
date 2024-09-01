import { P } from '@ades/typography'
import styled from 'styled-components'

const Root = styled.button`
    padding: 0 ${({ theme }) => theme.layout.spacing.size6};
    border-bottom: 1px solid ${({ theme }) => theme.color.border.secondary};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${({ theme }) => theme.layout.spacing.size8};
    height: 54px;
`

const Time = styled(P)`
    width: 60px;
    flex-shrink: 0;
    text-align: center;
`

const Info = styled.div`
    flex-grow: 1;
    display: flex;
    text-align: left;
    align-items: center;
`

export const Layout = {
    Root,
    Time,
    Info,
}
