import { fetchPokemonDos } from '../../Services/getPokemonInfoDos'
import { fetchPokemon } from '../../Services/getPokemonInfo'
import SearchDos from '../SearchDos/SearchDos'
import { useState } from 'react'
import Search from "../Search/Search"

function Batalla() {

    const [pokemon, setPokemon] = useState('')
    const [cargando, setCargando] = useState(false)

    const [pokemonDos, setPokemonDos] = useState('')
    const [cargandoDos, setCargandoDos] = useState(false)

    const getPokemon = async (query) => {
        setCargando(true)
        const res = await fetchPokemon(query)
        const resultado = await res.json()
        setPokemon(resultado)
        setCargando(false)
    }

    const getPokemonDos = async (query) => {
        setCargandoDos(true)
        const res = await fetchPokemonDos(query)
        const resultadoDos = await res.json()
        setPokemonDos(resultadoDos)
        setCargandoDos(false)
    }

    return (
        <div className="bg-[url('../../Assets/pokeArena.png')] bg-cover">

            <div className="md:flex grid grid-cols-2 gap-10 content-center h-screen justify-center ">
                <div className='md:flex'>
                    <div className='md:w-64 m-2'>
                        <h1 className='text-center'>Pokemon [1]</h1>
                        <Search getPokemon={getPokemon} />
                        {!cargando && pokemon ? (
                            <div className='grid text-center justify-center'>
                                <h1 className='font-bold capitalize pt-2'>{pokemon.name}</h1>
                                <div className='flex content-center justify-center'>
                                    <img src={pokemon?.sprites.front_default} alt={pokemon.name} />
                                </div>
                                <div>Vida: {pokemon?.stats[0].base_stat >= 25 ?
                                    (<h1 className='text-green-500 font-bold'>{pokemon?.stats[0].base_stat}</h1>) : pokemon?.stats[0].base_stat < 25 ?
                                        (<h1 className='text-orange-500 font-bold'>{pokemon?.stats[0].base_stat}</h1>) :
                                        pokemon?.stats[0].base_stat === 0 && (<h1 className='text-red-800 font-bold'>{pokemon?.stats[0].base_stat} PERDISTE</h1>)}
                                </div>

                                <div className='flex items-center content-center justify-center pt-2'>
                                    <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Ataque</button>
                                </div>
                                <div className='flex items-center content-center justify-center pt-2'>
                                    <button type="button" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Ataque Especial</button>
                                </div>

                            </div>) : null}

                    </div>

                    <div className='md:w-64 m-2'>
                        <h1 className='text-center'>Pokemon [2]</h1>
                        <SearchDos getPokemonDos={getPokemonDos} />
                        {!cargandoDos && pokemonDos ? (
                            <div className='grid text-center justify-center'>
                                <h1 className='font-bold capitalize pt-2'>{pokemonDos.name}</h1>
                                <div className='flex content-center justify-center'>
                                    <img src={pokemonDos?.sprites.front_default} alt={pokemonDos.name} />
                                </div>
                                <div>Vida: {pokemonDos?.stats[0].base_stat >= 25 ?
                                    (<h1 className='text-green-500 font-bold'>{pokemonDos?.stats[0].base_stat}</h1>) : pokemonDos?.stats[0].base_stat < 25 ?
                                        (<h1 className='text-orange-500 font-bold'>{pokemonDos?.stats[0].base_stat}</h1>) :
                                        pokemonDos?.stats[0].base_stat === 0 && (<h1 className='text-red-800 font-bold'>{pokemonDos?.stats[0].base_stat}</h1>)}
                                </div>

                                <div className='flex items-center content-center justify-center pt-2'>
                                    <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Ataque</button>
                                </div>
                                <div className='flex items-center content-center justify-center pt-2'>
                                    <button type="button" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Ataque Especial</button>
                                </div>

                            </div>) : null}

                    </div>
                </div>

            </div>

        </div >
    )
}

export default Batalla