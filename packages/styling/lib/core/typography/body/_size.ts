export interface BodySize {
    XL: string
    L: string
    M: string
    S: string
    XS: string
}

export const bodySize: BodySize = {
    XL: '1.25rem',
    L: '1.125rem',
    M: '1rem',
    S: '0.875rem',
    XS: '0.75rem',
} as const
