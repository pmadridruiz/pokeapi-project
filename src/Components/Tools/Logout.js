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

        <button className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2" type="button" onClick={logoutClear}> Salir</button >
    )
}

export default LogoutButton