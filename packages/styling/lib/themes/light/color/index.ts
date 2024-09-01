import { Color } from '@/core'

// Colors
import { backgroundColor } from './_background'
import { borderColor } from './_border'
import { fontColor } from './_font'
import { buttonColor } from './_button'

export const color: Color = {
    background: backgroundColor,
    border: borderColor,
    button: buttonColor,
    font: fontColor,
} as const
