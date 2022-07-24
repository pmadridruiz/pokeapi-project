import { useState, useEffect } from 'react'
import CardPokemon from '../Card/CardPokemon'
function Pokemon() {

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

  return (
    <>
      {allPokemons.map((pokemon, idx) => (<CardPokemon
        id={pokemon.id}
        name={pokemon.name}
        weight={pokemon.weight}
        abilities={pokemon.abilities[0].ability.name}
        basexp={pokemon.base_experience}
        imageFront={pokemon.sprites.front_default}
        imageBack={pokemon.sprites.back_default}
        type={pokemon.types[0].type.name}

        key={idx} />))}
    </>
  );
}

export default Pokemon;
