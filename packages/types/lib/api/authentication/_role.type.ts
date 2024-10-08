export const Role = {
    ADMINISTRATOR: 'ADMINISTRATOR',
    OWNER: 'OWNER',
    OPERATOR: 'OPERATOR',
    PLAYER: 'PLAYER',
} as const

export type Role = (typeof Role)[keyof typeof Role]
