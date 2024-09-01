import { type Breakpoint, breakpoint } from './_breakpoint'
import { type Radius, radius } from './_radius'
import { type Spacing, spacing } from './_spacing'
import { type Width, width } from './_width'

export interface Layout {
    breakpoint: Breakpoint
    radius: Radius
    spacing: Spacing
    width: Width
}

export const layout: Layout = {
    breakpoint,
    radius,
    spacing,
    width,
}
