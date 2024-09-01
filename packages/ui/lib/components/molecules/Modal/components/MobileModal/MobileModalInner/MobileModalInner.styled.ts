import styled from 'styled-components'
import { animated } from '@react-spring/web'

const Root = styled(animated.div)`
    position: fixed;
    transform-origin: center;
    top: initial;
    width: max-content;
    touch-action: none;
`

export const Layout = {
    Root,
}
