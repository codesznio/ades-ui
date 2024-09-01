export const FloatingAnchorType = {
    IDLE: 'IDLE',
    BOTTOM: 'BOTTOM',
    BOTTOM_START: 'BOTTOM_START',
    BOTTOM_END: 'BOTTOM_END',
    LEFT: 'LEFT',
    LEFT_START: 'LEFT_START',
    LEFT_END: 'LEFT_END',
    TOP: 'TOP',
    TOP_START: 'TOP_START',
    TOP_END: 'TOP_END',
    RIGHT: 'RIGHT',
    RIGHT_START: 'RIGHT_START',
    RIGHT_END: 'RIGHT_END',
} as const

export type FloatingAnchorType = (typeof FloatingAnchorType)[keyof typeof FloatingAnchorType]
