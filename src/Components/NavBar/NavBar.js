// Barra Buscadora SEARCH
import PokeLogo from '../../Assets/pokemonlogo.png'
import { Link, Outlet } from 'react-router-dom'
import './NavBar.css'


function NavBar(props) {

    return (
        <>
            <nav className="border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-red-400">
                <div className="container  flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/inicio" className="flex items-center">
                        <img src={PokeLogo} className="mr-3 h-6 sm:h-9" alt="Pokelogo" />
                    </Link>
                    <div className="flex md:order-2">
                        <div className='m-auto'>
                            <a href='https://github.com/pmadridruiz/pokeapi-project'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                        </div>
                    </div>
                    <div className="hidden justify-between w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                            <Link to="/inicio" className="md:auto block py-2 pr-4 pl-3 md:text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                                <li>Inicio</li>
                            </Link>

                            <Link to="/pokedex" className="block py-2 pr-4 pl-3 md:text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <li>Pokedéx</li>
                            </Link>

                            <Link to="/lista" className="block py-2 pr-4 pl-3 md:text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <li>Lista de Pókemones</li>
                            </Link>

                            <Link to="/batalla" className="block py-2 pr-10 pl-3 md:text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <li>Batalla</li>
                            </Link>

                        </ul>

                    </div>

                </div >
            </nav >

            <section>
                <Outlet />
            </section>

        </>

    )

}

export default NavBar