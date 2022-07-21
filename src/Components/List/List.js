// TODOS LOS POKEMONES
import { useState, useEffect } from 'react'

function List() {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setPokemons(data.results)
            })
    }, [])

    return (
        <>
            {pokemons.map((pokemon) => {
                return (<li key={pokemon.name}>{pokemon.name}</li>)
            })}
        </>
    )
}

export default List