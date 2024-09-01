import { type Body, body } from './body'
import { type Font, font } from './font'
import { type Heading, heading } from './heading'

export interface Typography {
    body: Body
    font: Font
    heading: Heading
}

export const typography: Typography = {
    body,
    font,
    heading,
}

export * from './font'

export type { Font }
