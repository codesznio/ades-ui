import { ErrorTable } from '../../components/ErrorTable'
import { Layout } from './ErrorMonitorContainer.styled'

export function ErrorMonitor() {
    return (
        <Layout.Root>
            <ErrorTable />
        </Layout.Root>
    )
}
