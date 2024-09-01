import styled from 'styled-components'

// Types
import { CloseButtonSizeType } from './CloseButtonSize.type'

interface Props {
    $size: CloseButtonSizeType
}

export const Root = styled.button<Props>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.layout.radius.size4};
    padding: ${({ theme }) => theme.layout.spacing.size4};
    transition: ${({ theme }) => theme.animation.css.transition.all};
    background: transparent;
    border: 1px solid transparent;
    color: ${({ theme }) => theme.color.font.tertiary};
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.color.background.secondary};
        border: 1px solid ${({ theme }) => theme.color.background.secondary};
        color: ${({ theme }) => theme.color.font.tertiary};
    }

    &:active {
        transform: scale(0.96);
    }

    &:disabled,
    [disabled] {
        cursor: not-allowed;
        background: transparent;
        border: 1px solid transparent;
        color: ${({ theme }) => theme.color.font.tertiary};
        opacity: 0.7;

        &:hover {
            background: transparent;
            border: 1px solid transparent;
            color: ${({ theme }) => theme.color.font.tertiary};
            opacity: 0.7;
        }
    }
`
