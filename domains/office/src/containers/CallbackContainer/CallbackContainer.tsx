import { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'

export function CallbackContaienr() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate({ to: '/login' })
    }, [navigate])

    return <></>
}
