// Barra Buscadora SEARCH
// import { useState } from 'react'
import './Search.css'
import PokeLogo from '../../Assets/pokemonlogo.png'
import { Link } from 'react-router-dom'

function Search(props) {

    // const [search, setSearch] = useState('')

    const cargarPokemon = async () => {
        try {
            const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            console.log(respuesta)
            if (respuesta.status !== 200) {
                console.log('Algo Falló')
            } else {
                const datos = await respuesta.json();
                console.log(datos)
            }

        } catch (error) {
            console.log(error)
        }
    }

    cargarPokemon()

    return (
        <>

            <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/inicio">
                        <a href="/inicio" class="flex items-center">
                            <img src={PokeLogo} class="mr-3 h-6 sm:h-9" alt="Pokelogo" />
                        </a>
                    </Link>
                    <div class="flex md:order-2">
                        <div class="relative md:block">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">SearchIcon</span>
                            </div>
                            <input type="text" id="search-navbar" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar Pokemón..." />
                        </div>
                    </div>
                    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <div class="relative mt-3 md:hidden">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="search-navbar" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div>
                        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                            <Link to="/inicio">
                                <li>
                                    <a href="/inicio" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Inicio</a>
                                </li>
                            </Link>

                            <Link to="/pokemon">
                                <li>
                                    <a href="/pokemon" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pokemón</a>
                                </li>
                            </Link>

                            <Link to="/historial">
                                <li>
                                    <a href="/historial" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Historial</a>
                                </li>
                            </Link>

                            <Link to="/lista">
                                <li>
                                    <a href="/lista" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Lista de Pókemones</a>
                                </li>
                            </Link>

                            <Link to="/combate">
                                <li>
                                    <a href="/combate" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Combate</a>
                                </li>
                            </Link>

                        </ul>
                    </div>
                </div >
            </nav >

        </>

    )

}

export default Search