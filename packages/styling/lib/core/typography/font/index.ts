import { type FontFamily, fontFamily } from './_family'
import { FontWeight, fontWeight } from './_weight'

export interface Font {
    family: FontFamily
    weight: FontWeight
}

export const font: Font = {
    family: fontFamily,
    weight: fontWeight,
}

export type { FontFamily }
