import { User } from './_user.interface'

export interface UserSensative extends User {
    providers: {
        email: {
            email: string
        }
    }
}
