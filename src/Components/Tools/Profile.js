import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Cargando...</div>
    }

    return (
        isAuthenticated && (
            <div>
                <div className='flex-col mr-6 mt-1.5'>
                    <h2>Bienvenido/a, {user.name}{' '}</h2>
                </div>
            </div>
        )
    )
}

export default Profile