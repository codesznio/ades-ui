import { Socket } from 'socket.io-client'

export interface GameContextInterface {
    initialised: boolean
    socket: Socket | null
    players: string[]
    status: string
}
