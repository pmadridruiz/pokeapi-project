import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Cargando...</div>
    }

    return (
        isAuthenticated && (
            <div className='flex-col p-2'>
                <h2>Hola, {user.name}{' '}</h2>
            </div>
        )
    )
}

export default Profile