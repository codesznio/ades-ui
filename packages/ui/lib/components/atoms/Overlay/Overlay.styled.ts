import styled from 'styled-components'
import { animated } from '@react-spring/web'

// Types
import { OverlayVariantType } from './OverlayVariant.type'

interface Props {
    $color: string
    $variant: OverlayVariantType
}

const Root = styled(animated.div)<Props>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);

    ${({ $color, $variant }) => {
        return (
            $variant === OverlayVariantType.BLUR &&
            `
            backdrop-filter: blur(5px);
            background: ${$color};
        `
        )
    }}
`
export const Layout = {
    Root,
}
