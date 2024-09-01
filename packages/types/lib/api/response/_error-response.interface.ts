export interface ErrorResponse {
    data: {
        status: number
        message: string
        details: string[]
    }
    success: false
}
