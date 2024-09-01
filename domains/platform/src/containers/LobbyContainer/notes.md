    // const socket = io('http://localhost:4550/games', {
    //     extraHeaders: {
    //         authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXIiOiI2NmQ0NzllMTkzZWI0YTAzYWY4YjFhZjciLCJ1c2VyIjoiNjZkNDc5ZTE5M2ViNGEwM2FmOGIxYWY1IiwiaWF0IjoxNzI1MjAxMDc0LCJleHAiOjE3MjUyODc0NzQsImlzcyI6ImFkZXMifQ.a_FPG3ILYpMINPoJyIteIhoS1GYOkf3aZ1hjWS7sisk`,
    //     },
    // })

    // useEffect(() => {
    //     // Handle successful game join
    //     socket.on('joined_game', (res) => {
    //         console.log(res)

    //         setLoading(false)
    //     })

    //     // Handle game start
    //     socket.on('game_started', (game) => {})

    //     // Handle errors
    //     socket.on('error', (message) => {
    //         setLoading(false)
    //         alert(message)
    //     })

    //     return () => {
    //         socket.off('joined_game')
    //         socket.off('game_started')
    //         socket.off('error')
    //     }
    // }, [history])

    // const join = () => {
    //     setLoading(true)

    //     socket.emit('join_game')
    // }
