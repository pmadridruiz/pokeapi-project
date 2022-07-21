// HISTORIAL DE POKEMONES BUSCADOS EN EL FINDER
import { useState } from 'react'
import pokemonlogo from '../../Assets/pokemonlogo.png'
import './Finder.css'

function Finder() {

    const [pokemon, setPokemon] = useState({})
    const [busqueda, setBusqueda] = useState('')

    const showData = async (query) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${query}`
        const res = await fetch(url)
        if (res.status !== 200) {
            alert('Pókemon no existe.')
            return
        }
        const data = await res.json()
        setPokemon(data)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const query = busqueda.toLocaleLowerCase()
        await showData(query)
    }

    return (
        <div className='bg-slate-700 w-full h-screen'>
            <div className='w-72 flex justify-center pt-5 m-auto'>
                <img src={pokemonlogo} alt='yes' />
            </div>
            <div className='pt-10'>
                <form className='items-center max-w-md mx-auto rounded border-0 p-3'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Buscar</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input onChange={(event) => setBusqueda(event.target.value)} type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar Pókemones..." required="" />
                        <button onClick={handleSubmit} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
                    </div>
                </form>
            </div>

            <div className='items-center max-w-md mx-auto rounded border-0 p-3 text-cyan-50 pt-10'>
                <div className='ml-auto mr-auto flex text-center justify-center'>
                    {pokemon?.name && (<img alt={pokemon.name} src={pokemon.sprites.front_default} />)}
                    {pokemon?.name && (<img alt={pokemon.name} src={pokemon.sprites.back_default} />)}
                </div>
                {pokemon?.name && (<h2 className='capitalize font-bold'>{pokemon.name}</h2>)}
                {pokemon?.stats?.map((stat) =>
                    (<li key={stat.stat.name}>{stat.stat.name} - {stat.base_stat}</li>))}
                {pokemon?.name && (<li key={pokemon?.weight}>weight - {pokemon?.weight}</li>)}
            </div>

        </div >
    )

}

export default Finder