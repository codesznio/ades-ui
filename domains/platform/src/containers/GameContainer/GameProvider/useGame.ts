import { useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'
import Cookies from 'js-cookie'
import { useParams } from '@tanstack/react-router'

export function useGame() {
    const [initialised, setInitialised] = useState<boolean>(false)
    const [socket, setSocket] = useState<Socket | null>(null)
    const [players, setPlayers] = useState<string[]>([])
    const [status, setStatus] = useState<string>('WAITING')
    const params = useParams({ from: '/_protected/games/$id' })

    useEffect(() => {
        const access = Cookies.get('access')

        const newSocket = io(`${import.meta.env.VITE_API_ROOT}/games/${params.id}`, {
            extraHeaders: {
                authorization: `Bearer ${access}`,
            },
            query: {
                id: params.id, // Send gameId as a query parameter
            },
        })

        newSocket.on('connect', () => console.log('I am connected'))

        newSocket.on('connect_error', (error) => {
            console.error('Connection error:', error)
        })

        newSocket.on('player_connected', (data) => {
            console.log('Player connected:', data)

            setPlayers(data.players)
            setStatus(data.status)
        })

        return () => {
            newSocket.close()
        }
    }, [params.id])

    return {
        initialised,
        socket,
        status,
        players,
    }
}

/**
 * 1. Connect to websocket
 * 2. Connect to game
 * 3.
 */
