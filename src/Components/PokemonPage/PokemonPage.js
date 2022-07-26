import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CardPokemon from '../Card/CardPokemon';

function PokemonPage() {

    const [pokemon, setPokemon] = useState({})

    const { pokename } = useParams()

    const getPokemon = async (name) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await res.json()
        setPokemon(data)
    }

    useEffect(() => {
        if (pokename && !pokemon.name) {
            getPokemon(pokename)
        }
    }, [pokemon.name, pokename])

    return (
        <>
            {pokemon?.name && (<div>
                <CardPokemon
                    id={pokemon?.id}
                    name={pokemon?.name}
                    spriteFront={pokemon?.sprites.front_default}
                    spriteBack={pokemon?.sprites.back_default}
                    spriteShiny={pokemon?.sprites.front_shiny}
                    spriteFemale={pokemon?.sprites.front_female}
                    abilities={pokemon?.abilities}
                    stats={pokemon?.stats}
                    types={pokemon?.types}
                    weight={pokemon?.weight}
                    moves={pokemon?.moves}
                    baseExp={pokemon?.base_experience}
                />
            </div>)}
        </>
    )
}

export default PokemonPage