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
        <>

            <div className="md:flex flex grid-cols-2 gap-10 content-center h-screen justify-center">

                <div className='md:w-64 m-2'>
                    <h1 className='text-center'>Pokemon [1]</h1>
                    <Search getPokemon={getPokemon} />
                    {!cargando && pokemon ? (
                        <div className='grid text-center justify-center'>
                            <h1 className='font-bold capitalize pt-2'>{pokemon.name}</h1>
                            <img src={pokemon?.sprites.front_default} alt={pokemon.name} />
                            <h1>{pokemon?.stats[0].base_stat}</h1>
                        </div>) : null}
                </div>

                <div className='md:w-64 m-2'>
                    <h1 className='text-center'>Pokemon [2]</h1>
                    <SearchDos getPokemonDos={getPokemonDos} />
                    {!cargandoDos && pokemonDos ? (
                        <div className='grid text-center justify-center'>
                            <h1 className='font-bold capitalize pt-2'>{pokemonDos.name}</h1>
                            <img src={pokemonDos?.sprites.front_default} alt={pokemonDos.name} />
                            <h1>{pokemonDos?.stats[0].base_stat}</h1>
                        </div>) : null}
                </div>
            </div>

        </>
    )
}

export default Batalla