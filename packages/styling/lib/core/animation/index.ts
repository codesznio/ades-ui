import { type CSSAnimation, cssAnimation } from './css'

export interface Animation {
    css: CSSAnimation
}

export const animation: Animation = {
    css: cssAnimation,
}
