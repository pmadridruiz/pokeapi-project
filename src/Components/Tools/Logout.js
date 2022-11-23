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

        <input type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={logoutClear}> Logout</input >
    )
}

export default LogoutButton