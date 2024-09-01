import { useQuery } from '@tanstack/react-query'
import { ErrorItem } from './ErrorItem'
import { Layout } from './ErrorTable.styled'
import { getSystemErrors } from '@/data/query/developer/getSystemErrors/getSystemErrors'
import { queryClient } from '@/providers/query'
import { queryKeys } from '@/data/query/query.keys'
import { useEffect } from 'react'
import { Api } from '@ades/types'
import { io } from 'socket.io-client'
import { animated, useTransition } from '@react-spring/web'

export function ErrorTable() {
    const query = useQuery(getSystemErrors())

    useEffect(() => {
        // Connect to the WebSocket server
        const socket = io(`${import.meta.env.VITE_API_ROOT}/errors`) // Adjust the URL to match your server

        socket.on('connect', () => {
            console.log('Connected to WebSocket server')

            // Subscribe to the 'subscribeErrors' event
            socket.emit('subscribeErrors')
        })

        socket.on('new', (error) => {
            queryClient.setQueryData(queryKeys.developer.errors(), (data: Api.Response<Api.Error[]>) => {
                if (!data) return { data: [error] }

                return {
                    ...data,
                    data: [error, ...data.data].sort((a, b) => {
                        console.log(new Date(b.date).getTime())

                        return new Date(b.date).getTime() - new Date(a.date).getTime()
                    }),
                }
            })
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    // Use useTransition to animate new items in the list
    const transitions = useTransition(
        query.data?.data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) || [],
        {
            from: { opacity: 1, transform: 'translateY(-54px)' },
            enter: { opacity: 1, transform: 'translateY(0px)' },
            leave: { opacity: 1, transform: 'translateY(0px)' },
            keys: (error) => error._id, // Assuming each error has a unique _id
        },
    )

    return (
        <Layout.Root>
            <Layout.Header></Layout.Header>
            <Layout.Content>
                {transitions((style, error) => (
                    <animated.div style={style}>
                        <ErrorItem key={error._id} error={error} />
                    </animated.div>
                ))}
            </Layout.Content>
            <Layout.Footer></Layout.Footer>
        </Layout.Root>
    )
}
