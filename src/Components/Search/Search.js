// Barra Buscadora SEARCH
import { useState, useEffect } from 'react';
import './Search.css'
import PokeLogo from '../../Assets/pokemonlogo.png'
import { Link, Outlet } from 'react-router-dom'

function Search(props) {

    const [busqueda, setBusqueda] = useState('')

    const [allPokemons, setAllPokemons] = useState([])
    // Al renderizar se cargarán los valores de la api a [loadMorePokemons] en este caso una lista de 20 pokemones.
    const [loadMorePokemons, setLoadMorePokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemons = async () => {
        const res = await fetch(loadMorePokemons)
        const data = await res.json()

        setLoadMorePokemons(data.next)
        // console.log(data)

        // For del array de objetos pokemon de la api y los seteamos en nuestro array [allPokemons] 
        // Al mismo tiempo que llamamos a la api.
        function createPokemonObject(resultado) {
            resultado.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()

                // Setear lo que ya está dentro del array más la info consumida de la api.
                setAllPokemons(currentList => [...currentList, data])
            })
        }

        createPokemonObject(data.results)

    }

    useEffect(() => {
        getAllPokemons()
    }, [])


    // const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setBusqueda(event.target.value)
            setBusqueda('');
            if (busqueda === '') {
                return ''
            }
            console.log(busqueda)
        }
    }

    const handleClick = () => {
        setBusqueda('');
    }
    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-red-500">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/inicio" className="flex items-center">
                        <img src={PokeLogo} className="mr-3 h-6 sm:h-9" alt="Pokelogo" />
                    </Link>
                    <div className="flex md:order-2">
                        <div className='m-auto pr-5'>
                            <a href='https://github.com/pmadridruiz/pokeapi-project'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                        </div>
                        <div className="relative md:block">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">SearchIcon</span>
                            </div>
                            <input onClick={handleClick} value={busqueda} onChange={(e) => setBusqueda(e.target.value)} onKeyDown={handleKeyDown} type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Buscar Pokemón..." />
                        </div>
                    </div>

                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                            <Link to="/inicio" className="md:auto block py-2 pr-4 pl-3 md:text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                                <li>Inicio</li>
                            </Link>

                            <Link to="/pokemon" className="block py-2 pr-4 pl-3 md:text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <li>Pokemón</li>
                            </Link>

                            <Link to="/historial" className="block py-2 pr-4 pl-3 md:text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <li>Historial</li>
                            </Link>

                            <Link to="/lista" className="block py-2 pr-4 pl-3 md:text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <li>Lista de Pókemones</li>
                            </Link>

                            <Link to="/combate" className="block py-2 pr-10 pl-3 md:text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <li>Combate</li>
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

export default Search