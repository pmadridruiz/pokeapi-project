const urlBase = 'https://pokeapi.co/api/v2'
const query = {
    pokemonName: 'pokemon'
}
export async function fetchPokemonDos(pokemon) {
    console.log(`${urlBase}/${query.pokemonName}/${pokemon}`)
    return fetch(`${urlBase}/${query.pokemonName}/${pokemon}`)
}
