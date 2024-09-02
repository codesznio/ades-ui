import { P } from '@ades/typography'
import { Layout } from './GameWaiting.styled'
import { PuffLoader } from 'react-spinners'
import { useGameContext } from '../GameProvider'

export function GameWaiting() {
    const { players } = useGameContext()
    return (
        <Layout.Root>
            <P>Waiting For Players</P>
            <div>
                {players.map((player) => (
                    <div key={player}>{player}</div>
                ))}
            </div>
            <PuffLoader speedMultiplier={0.5} />
        </Layout.Root>
    )
}
