import { type BodyLineHeight, bodyLineHeight } from './_height'
import { type BodySize, bodySize } from './_size'

export interface Body {
    height: BodyLineHeight
    size: BodySize
}

export const body: Body = {
    height: bodyLineHeight,
    size: bodySize,
}

export type { BodyLineHeight, BodySize }
