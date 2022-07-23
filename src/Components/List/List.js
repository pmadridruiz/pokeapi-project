// TODOS LOS POKEMONES
import { useState, useEffect } from 'react'

function List() {

    const [allPokemons, setAllPokemons] = useState([])
    // Al renderizar se cargarán los valores de la api a [loadMorePokemons] en este caso una lista de 20 pokemones.
    const [loadMorePokemons, setLoadMorePokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')

    const getAllPokemons = async () => {
        const res = await fetch(loadMorePokemons)
        const data = await res.json()

        console.log(data)
    }

    useEffect(() => {
        getAllPokemons()
    }, [])

    return (
        <>
        </>
    )
}

export default List