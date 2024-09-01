import { type HeadingLineHeight, headingLineHeight } from './_height'
import { type HeadingSize, headingSize } from './_size'

export interface Heading {
    height: HeadingLineHeight
    size: HeadingSize
}

export const heading: Heading = {
    height: headingLineHeight,
    size: headingSize,
}

export type { HeadingLineHeight, HeadingSize }
