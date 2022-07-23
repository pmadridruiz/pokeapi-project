// TODOS LOS POKEMONES
import { useState, useEffect } from 'react'
import Card from '../Cards/CardList'
import { useNavigate } from 'react-router-dom';
import '../List/List.css'

function List() {

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

    const navigate = useNavigate();

    return (
        <>
            <div>

                {allPokemons.map((pokemon, idx) => (<Card
                    link={() => navigate(`/pokemon?${pokemon.name}`)}
                    pokeball={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.sprites.front_default}
                    type={pokemon.types[0].type.name}
                    key={idx} />))}
                <button onClick={() => { getAllPokemons() }} type="button" class="w-full items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Cargar más Pókemones</button>
            </div>

        </>
    )
}

export default List