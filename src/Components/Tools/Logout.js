import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {

    const uriLogout = 'https://pokedexapp0213.herokuapp.com/inicio'
    const { logout } = useAuth0();

    function logoutClear() {
        localStorage.clear()
        logout({ returnTo: uriLogout })

    }

    return (

        <button className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mb-1" type="button" onClick={logoutClear}>Salir</button >
    )
}

export default LogoutButton