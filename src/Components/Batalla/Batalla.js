import { fetchPokemon } from '../../Services/getPokemonInfo'
import { fetchPokemonDos } from '../../Services/getPokemonInfoDos'
import Search from '../Search/Search'
import SearchBatalla from '../SearchBatalla/SearchBatalla'
import { useState } from 'react'

function Batalla() {

    const [pokemon, setPokemon] = useState('')
    const [cargando, setCargando] = useState(false)

    const [pokemonDos, setPokemonDos] = useState('')
    const [cargandoDos, setCargandoDos] = useState(false)

    const [hpPokemonUno, setHpPokemonUno] = useState(0)
    const [hpPokemonDos, setHpPokemonDos] = useState(0)

    const [disableAttackUno, setDisableAttackUno] = useState()
    const [disableAttackDos, setDisableAttackDos] = useState()

    const getPokemon = async (query) => {
        setCargando(true)
        const res = await fetchPokemon(query)
        const resultado = await res.json()
        const vidaUno = resultado.stats.find(stat => stat.stat.name === 'hp')
        setPokemon(resultado)
        setHpPokemonUno(vidaUno?.base_stat * 8)
        setCargando(false)
    }

    const getPokemonDos = async (query) => {
        setCargandoDos(true)
        const res = await fetchPokemonDos(query)
        const resultadoDos = await res.json()
        const vidaDos = resultadoDos.stats.find(stat => stat.stat.name === 'hp')
        setPokemonDos(resultadoDos)
        setHpPokemonDos(vidaDos.base_stat * 8)
        setCargandoDos(false)
    }


    const attackPokemonUno = (attackType) => {
        setDisableAttackUno(true)
        setDisableAttackDos(false)
        const attackUno = pokemon.stats.find(stat => stat.stat.name === attackType)
        setHpPokemonDos(hpPokemonDos - attackUno.base_stat)
        console.log(attackUno)
    }

    const attackPokemonDos = (attackType) => {
        setDisableAttackUno(false)
        setDisableAttackDos(true)
        const attackDos = pokemonDos.stats.find(stat => stat.stat.name === attackType)
        setHpPokemonUno(hpPokemonUno - attackDos.base_stat)
        console.log(attackDos)
    }


    return (
        <div className="bg-[url('../../Assets/pokeBattleground.png')] bg-[length:100%_100%]">

            <div className="md:flex content-center h-screen justify-center ">
                <div className='md:flex'>
                    <div className='md:w-64 m-2'>
                        <h1 className='text-center'>Pokemon [1]</h1>
                        <div className='w-full pb-4'>
                            <Search getPokemon={getPokemon} />
                        </div>
                        {!cargando && pokemon ? (
                            <div className='grid text-center justify-center'>
                                <h1 className='font-bold capitalize pt-2'>{pokemon.name}</h1>
                                {hpPokemonUno > 1 ? (<div className='flex content-center justify-center'>
                                    <img src={pokemon?.sprites.front_default} alt={pokemon.name} />
                                </div>) : (<div className='flex content-center justify-center grayscale'>
                                    <img src={pokemon?.sprites.front_default} alt={pokemon.name} />
                                </div>)}
                                <div>Vida {hpPokemonUno >= 25 ?
                                    (<h1 className='text-green-600 font-bold'>{hpPokemonUno}</h1>) : hpPokemonUno <= 24 && hpPokemonUno > 0 ?
                                        (<h1 className='text-orange-500 font-bold'>{hpPokemonUno}</h1>) :
                                        hpPokemonUno <= 0 && (<h1 className='text-red-800 font-bold'>0</h1>)}
                                </div>

                                <div className='flex items-center content-center justify-center pt-2'>
                                    <button onClick={() => attackPokemonUno('attack')} disabled={disableAttackUno || hpPokemonUno <= 0} type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Ataque</button>
                                </div>
                                <div className='flex items-center content-center justify-center pt-2'>
                                    <button onClick={() => attackPokemonUno('special-attack')} disabled={disableAttackUno || hpPokemonUno <= 0} type="button" className="grayscale inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Ataque Especial</button>
                                </div>

                            </div>) : null}

                    </div>

                    <div className='flex-col w-24 pt-96'>
                        <div className='pt-12'>

                        </div>
                        {(hpPokemonDos < 0 || hpPokemonUno < 0) && (<button onClick={() => window.location.reload(false)} type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Nueva Pelea</button>)}
                    </div>

                    <div className='md:w-64 m-2'>
                        <h1 className='text-center'>Pokemon [2]</h1>
                        <div className='w-full pb-4'>
                            <SearchBatalla getPokemonDos={getPokemonDos} />
                        </div>
                        {!cargandoDos && pokemonDos ? (
                            <div className='grid text-center justify-center'>
                                <h1 className='font-bold capitalize pt-2'>{pokemonDos.name}</h1>
                                {hpPokemonDos > 1 ? (<div className='flex content-center justify-center'>
                                    <img src={pokemonDos?.sprites.front_default} alt={pokemonDos.name} />
                                </div>) : (<div className='flex content-center justify-center grayscale'>
                                    <img src={pokemonDos?.sprites.front_default} alt={pokemonDos.name} />
                                </div>)}
                                <div>Vida {hpPokemonDos >= 25 ?
                                    (<h1 className='text-green-600 font-bold'>{hpPokemonDos}</h1>) : hpPokemonDos <= 24 && hpPokemonDos > 0 ?
                                        (<h1 className='text-orange-500 font-bold'>{hpPokemonDos}</h1>) :
                                        hpPokemonDos <= 0 && (<h1 className='text-red-800 font-bold'>0</h1>)}
                                </div>

                                <div className='flex items-center content-center justify-center pt-2'>
                                    <button onClick={() => attackPokemonDos('attack')} disabled={disableAttackDos || hpPokemonDos <= 0} type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Ataque</button>
                                </div>
                                <div className='flex items-center content-center justify-center pt-2'>
                                    <button onClick={() => attackPokemonDos('special-attack')} disabled={disableAttackDos || hpPokemonDos <= 0} type="button" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Ataque Especial</button>
                                </div>

                            </div>) : null}

                    </div>
                </div>

            </div>

        </div >
    )
}

export default Batalla