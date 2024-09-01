export const i18Namespace = {} as const

export type i18Namespace = (typeof i18Namespace)[keyof typeof i18Namespace]
