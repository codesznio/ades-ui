import { useState } from 'react'

export function useGame() {
    const [initialised] = useState<boolean>(false)

    return {
        initialised,
    }
}
