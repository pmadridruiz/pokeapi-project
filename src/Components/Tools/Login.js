import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <button className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-0 focus:outline-none focus:ring-[#4285F4]/50 active:shadow-lg transition duration-150 ease-in-out mb-1" type="button" onClick={() => loginWithRedirect()}>Ingresar</button>
    )
}

export default LoginButton