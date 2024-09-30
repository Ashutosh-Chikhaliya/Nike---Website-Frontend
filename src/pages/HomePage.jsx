import React from 'react'
import Home from '../components/home/Home'
import { useAuth } from '../context/auth'

const HomePage = () => {

    const [auth] = useAuth()
    return (
        <div>
            <Home />
            <pre>{JSON.stringify(auth, null, 4)}</pre>
        </div>
    )
}

export default HomePage
