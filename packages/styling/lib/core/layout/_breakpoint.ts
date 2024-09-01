export interface Breakpoint {
    mobile: string
    tablet: string
    laptop: string
    desktop: string
    monitor: string
}

export const breakpoint: Breakpoint = {
    mobile: '30rem',
    tablet: '48rem',
    laptop: '64rem',
    desktop: '80rem',
    monitor: '120rem',
} as const
