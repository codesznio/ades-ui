import styled from 'styled-components'

interface Props {
    $full: boolean
}

const Root = styled.button<Props>`
    align-items: center;
    border-radius: ${({ theme }) => theme.layout.radius.size4};
    cursor: pointer;
    display: flex;
    font-weight: ${({ theme }) => theme.typography.font.weight.SEMIBOLD};
    height: 48px;
    justify-content: center;
    transition: ${({ theme }) => theme.animation.css.transition.all};
    width: ${({ $full }) => ($full ? '100%' : 'auto')};
    gap: ${({ theme }) => theme.layout.spacing.size2};
    padding: 0 ${({ theme }) => theme.layout.spacing.size5};
    background: ${({ theme }) => theme.color.button.background.base};
    border: 1px solid ${({ theme }) => theme.color.button.border.base};
    color: ${({ theme }) => theme.color.button.text.base};
    font-size: ${({ theme }) => theme.typography.body.size.M};
    line-height: ${({ theme }) => theme.typography.body.height.M};

    &:active,
    &:hover {
        background: ${({ theme }) => theme.color.button.background.hover};
        border: 1px solid ${({ theme }) => theme.color.button.border.hover};
        color: ${({ theme }) => theme.color.button.text.hover};
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
