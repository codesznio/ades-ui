import styled from 'styled-components'

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

interface Props {
    $color?: string
}

const Toggle = styled.input<Props>`
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    height: 24px;
    width: 44px;
    border-radius: 16px;
    display: inline-block;
    position: relative;
    margin: 0;
    border: 1px solid ${({ theme }) => theme.color.border.secondary};
    background: ${({ theme }) => theme.color.background.secondary};
    transition: ${({ theme }) => theme.animation.css.transition.all};

    &:focus {
        outline: 0;
    }

    &:after {
        content: '';
        position: absolute;
        top: 1px;
        left: 1px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: white;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        transition: ${({ theme }) => theme.animation.css.transition.all};
    }

    &:checked {
        border: 1px solid ${({ $color }) => ($color ? $color : '#1877F2')};

        &:after {
            transform: translateX(20px);
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
            background: ${({ theme }) => theme.color.background.primary};
        }
    }
`

export const Layout = {
    Root,
    Toggle,
}
