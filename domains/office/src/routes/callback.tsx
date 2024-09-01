import { createFileRoute } from '@tanstack/react-router'

import { CallbackContaienr } from '@/containers'

export const Route = createFileRoute('/callback')({
    component: CallbackContaienr,
})
