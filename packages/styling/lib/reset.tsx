import { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
    *,
    *:after,
    *:before {
        box-sizing: border-box;
        overscroll-behavior: none;
    }

    html, 
    body {
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        height: -webkit-fill-available;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        transition: color 0.3s ease, background 0.3s ease;
        font-family: ${({ theme }) => theme.typography.font.family.primary};
        background: ${({ theme }) => theme.color.background.primary};
        color: ${({ theme }) => theme.color.font.primary};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span,
    small {
        margin: 0;
        padding: 0;
    }

    ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        list-style: inherit;
    }

    a, button {
        -webkit-tap-highlight-color: transparent;
        appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        cursor: pointer;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        margin: 0; 
        outline: none;
        padding: 0;
        text-decoration: none;
        user-select: none;
    }

    input {
        outline: none;
        border: none;
        padding: 0;
        margin: 0;
        background: transparent;
        font-family: inherit;
    }
`
