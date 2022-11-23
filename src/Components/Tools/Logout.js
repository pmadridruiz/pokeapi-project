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

        <button className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md bg-red-600 hover:bg-red-700 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out" type="button" onClick={logoutClear}> Salir</button >
    )
}

export default LogoutButton