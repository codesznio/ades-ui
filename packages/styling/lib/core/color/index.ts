import { type BackgroundColor, backgroundColor } from './_background'
import { type BorderColor, borderColor } from './_border'
import { type ButtonColorProps, buttonColor } from './_button'
import { type FontColor, fontColor } from './_font'

export interface Color {
    background: BackgroundColor
    border: BorderColor
    button: ButtonColorProps
    font: FontColor
}

export const color: Color = {
    background: backgroundColor,
    border: borderColor,
    button: buttonColor,
    font: fontColor,
} as const
