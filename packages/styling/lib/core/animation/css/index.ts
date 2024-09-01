import { type Transition, transition } from './_transition'

export interface CSSAnimation {
    transition: Transition
}

export const cssAnimation: CSSAnimation = {
    transition,
}

export type { Transition }
