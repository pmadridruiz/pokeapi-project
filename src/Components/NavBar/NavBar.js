// Barra Buscadora SEARCH
import PokeLogo from '../../Assets/pokemonlogo.png'
import { useAuth0 } from '@auth0/auth0-react'
import { Link, Outlet } from 'react-router-dom'
import './NavBar.css'
import LoginButton from '../Tools/Login'
import LogoutButton from '../Tools/Logout'
import Profile from '../Tools/Profile'


function NavBar() {

    const { isAuthenticated } = useAuth0();

    return (
        <div data-testid='navbar-pokemonapp'>
            <nav className="md:flex border-gray-200 px-2 sm:px-4 py-2.5 bg-red-500">
                <div className="md:container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/inicio" className="md:flex items-center">
                        <img src={PokeLogo} className="mr-3 h-6 sm:h-9" alt="Pokelogo" />
                    </Link>

                    <div className="flex md:order-2">
                        <div className='m-2 flex'>
                            {isAuthenticated ?
                                (<>
                                    <Profile />
                                    <LogoutButton />
                                </>) : (
                                    <LoginButton />)}

                        </div>
                    </div>

                    <div className="flex justify-between w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                            <Link to="/inicio" className="md:block block py-2 pr-4 pl-3 md:text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:dark:hover:text-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                                <li>Inicio</li>
                            </Link>

                            <Link to="/pokedex" className="md:block py-2 pr-4 pl-3 md:text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:dark:hover:text-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <li>Pokédex</li>
                            </Link>

                            <Link to="/lista" className="md:block py-2 pr-4 pl-3 md:text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:dark:hover:text-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <li>Lista de Pókemones</li>
                            </Link>

                            <Link to="/batalla" className="md:block py-2 pr-10 pl-3 md:text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:dark:hover:text-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <li>Batalla</li>
                            </Link>

                            <Link to="/favoritos" className="md:block py-2 pr-10 pl-3 md:text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:dark:hover:text-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <li>Favoritos</li>
                            </Link>

                            <Link to="/historial" className="md:block py-2 pr-10 pl-3 md:text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:dark:hover:text-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <li>Historial</li>
                            </Link>


                        </ul>

                    </div>

                </div >
            </nav >

            <section>
                <Outlet />
            </section>

        </div>

    )

}

export default NavBar