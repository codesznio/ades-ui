import { ErrorResponse } from './_error-response.interface'

export interface CustomError extends Error {
    response?: {
        data?: ErrorResponse
    }
}
