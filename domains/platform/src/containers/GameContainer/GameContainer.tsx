import { Layout } from './GameContainer.styled'
import { useGameContext } from './GameProvider'

export function GameContainer() {
    const {} = useGameContext()

    return <Layout.Root>Game Container</Layout.Root>
}
