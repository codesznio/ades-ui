import { animated } from '@react-spring/web'
import styled from 'styled-components'

const Root = styled.div``

const Inner = styled.div`
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    border-radius: ${({ theme }) => theme.layout.radius.size6};
    background: ${({ theme }) => theme.color.background.secondary};
    overflow: hidden;
`

const Content = styled.div`
    border-radius: ${({ theme }) => theme.layout.radius.size6};
    background: ${({ theme }) => theme.color.background.primary};
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    border-bottom-right-radius: ${({ theme }) => theme.layout.radius.size6};
    border-bottom-left-radius: ${({ theme }) => theme.layout.radius.size6};
`

const Error = styled.div`
    border-bottom-right-radius: ${({ theme }) => theme.layout.radius.size6};
    border-bottom-left-radius: ${({ theme }) => theme.layout.radius.size6};
`

const Animated = styled(animated.div)`
    overflow: hidden;
`

export const Layout = {
    Root,
    Inner,
    Content,
    Error,
    Animated,
}
