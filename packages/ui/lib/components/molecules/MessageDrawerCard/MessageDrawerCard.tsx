import { PropsWithChildren, ReactNode } from 'react'
import { useSpring } from '@react-spring/web'

// Styling
import { Layout } from './MessageDrawerCard.styled'

export interface MessageDrawerCard {
    open: boolean
    error: ReactNode
}

export function MessageDrawerCard({ open, error, children, ...rest }: PropsWithChildren<MessageDrawerCard>) {
    const slideAnimation = useSpring({
        maxHeight: open ? 150 : 0,
        overflow: 'hidden',
        config: {
            tension: 250,
            friction: 40,
            clamp: true, // Prevents overshooting the value
        },
    })

    return (
        <>
            <Layout.Root {...rest}>
                <Layout.Inner>
                    <Layout.Content>{children}</Layout.Content>

                    <Layout.Animated style={slideAnimation}>
                        <Layout.Error>{error}</Layout.Error>
                    </Layout.Animated>
                </Layout.Inner>
            </Layout.Root>
        </>
    )
}
