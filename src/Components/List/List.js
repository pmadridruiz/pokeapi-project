// TODOS LOS POKEMONES
import { useState, useEffect } from 'react'
import CardList from '../Card/CardList'
import '../List/List.css'

function List() {

    const [allPokemons, setAllPokemons] = useState([])
    // Al renderizar se cargarán los valores de la api a [loadMorePokemons] en este caso una lista de 20 pokemones.
    const [loadMorePokemons, setLoadMorePokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemons = async () => {
        const res = await fetch(loadMorePokemons)
        const data = await res.json()
        setLoadMorePokemons(data.next)

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <div className="md:w-auto justify-center m-2 flex text-center text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm py-2.5 mb-2 dark:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700">
                <button disabled type="button">Consejo: Si pasas el cursor por arriba del pókemon te mostrará su imagen de frente y de espaldas.</button>
            </div>
            <div className='flex-1'>
                <div title='list-card-pokemon' className='grid grid-cols-4 content-center gap-1'>
                    {allPokemons.map((pokemon, idx) => (<CardList
                        id={pokemon.id}
                        name={pokemon.name}
                        imageFront={pokemon.sprites.front_default}
                        imageBack={pokemon.sprites.back_default}
                        type={pokemon.types[0].type.name}
                        baseExp={pokemon.base_experience}
                        key={idx} />))}
                </div>
            </div>
            <div onClick={() => { getAllPokemons() }} className="md:w-auto justify-center m-2 flex text-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                <button onClick={() => { getAllPokemons() }} type="button">CARGAR MÁS POKÉMONES...</button>
            </div>
        </>
    )
}

export default List