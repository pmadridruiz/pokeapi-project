import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Cargando...</div>
    }

    return (
        isAuthenticated && (
            <div className='flex-col mr-4 ml-4'>
                <h2>Hola, {user.name}{' '}</h2>
            </div>
        )
    )
}

export default Profile