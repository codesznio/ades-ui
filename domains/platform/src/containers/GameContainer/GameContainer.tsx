import { Layout } from './GameContainer.styled'
import { useGameContext } from './GameProvider'

export function GameContainer() {
    const { initialised } = useGameContext()

    console.log(initialised)

    return <Layout.Root>Game Container</Layout.Root>
}
