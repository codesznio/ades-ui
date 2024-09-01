import { createFileRoute } from '@tanstack/react-router'

// Containers
import { LandingContainer } from '@/containers'

export const Route = createFileRoute('/_protected/')({
    component: LandingContainer,
})
