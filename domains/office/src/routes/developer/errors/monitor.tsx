import { createFileRoute } from '@tanstack/react-router'

// Container
import { ErrorMonitor } from '@/features/developer/containers/ErrorMonitorContainer'

export const Route = createFileRoute('/developer/errors/monitor')({
    component: ErrorMonitor,
})
