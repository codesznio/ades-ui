import { Role } from '@/api/authentication'

export interface User {
    _id: string
    credentials: {
        role: Role
    }
}
