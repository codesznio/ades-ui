import styled from 'styled-components'

const Root = styled.button`
    border-radius: ${({ theme }) => theme.layout.radius.size4};
    transition: ${({ theme }) => theme.animation.css.transition.all};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 48px;
    width: 48px;
    flex-shrink: 0;

    svg {
        color: ${({ theme }) => theme.color.font.tertiary};
        transition: ${({ theme }) => theme.animation.css.transition.all};
    }

    &:active,
    &:hover {
        background: ${({ theme }) => theme.color.background.tertiary};

        svg {
            color: ${({ theme }) => theme.color.font.primary};
        }
    }

    &:active {
        transform: scale(0.99);
    }

    &:disabled,
    [disabled] {
        cursor: not-allowed;
        opacity: 0.7;
        background: ${({ theme }) => theme.color.button.background.disabled};
        border: 1px solid ${({ theme }) => theme.color.button.border.disabled};
        color: ${({ theme }) => theme.color.button.text.disabled};

        &:active,
        &:hover {
            transform: scale(1);
        }
    }
`

export const Layout = {
    Root,
}
