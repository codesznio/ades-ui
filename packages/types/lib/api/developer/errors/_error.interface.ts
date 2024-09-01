import { RequestMeta } from '../_request-meta.interface'
import { ErrorImpact } from './_error-impact.type'

export interface Error {
    _id: string
    date: Date
    impact: ErrorImpact
    context: {
        action: string
        error: string
        feature: string
        initiant: string
    }
    data: {
        body: { [key: string]: unknown }
        user: string
    }
    details: {
        code: number
        description: string
    }
    meta: RequestMeta
}
