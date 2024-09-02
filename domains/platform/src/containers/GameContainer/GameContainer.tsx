import { P } from '@ades/typography'
import { Layout } from './GameContainer.styled'
import { useGameContext } from './GameProvider'
import { Modal } from '@ades/ui'
import { GameWaiting } from './GameWaiting/GameWaiting'

export function GameContainer() {
    const { players, status } = useGameContext()

    return (
        <>
            <Layout.Root>
                <div>
                    <P>ADES!</P>
                    <P>{status}</P>
                    <P>{players.length}</P>
                    <div>
                        {players.map((player) => (
                            <div key={player}>{player}</div>
                        ))}
                    </div>
                </div>
            </Layout.Root>

            <Modal active={status === 'WAITING'} close={() => status !== 'WAITING'}>
                <GameWaiting />
            </Modal>
        </>
    )
}
