import { useState } from 'react'

import { HeroButton } from '@ades/ui'

// Styling
import { Layout } from './LobbyContainer.styled'
import { useRegisterToGame } from '@/data'
import { useNavigate } from '@tanstack/react-router'

export function LobbyContainer() {
    const [loading, setLoading] = useState(false)
    const mutation = useRegisterToGame()
    const navigate = useNavigate()

    const join = () => {
        setLoading(true)

        mutation.mutate(
            {},
            {
                onSuccess: async (response) => {
                    navigate({
                        to: `/games/$id`,
                        params: {
                            id: response.data._id,
                        },
                    })
                },
                onSettled: () => setLoading(false),
            },
        )
    }

    return (
        <Layout.Root>
            <Layout.Container>
                <HeroButton full disabled={loading} onClick={join}>
                    {loading ? 'Joining...' : 'Join Game'}
                </HeroButton>
            </Layout.Container>
        </Layout.Root>
    )
}
