import { fetchPokemon } from '../../Services/getPokemonInfo'
import { useState } from 'react'
import './Pokedex.css'
import Search from '../Search/Search'
import CardPokemon from '../Card/CardPokemon'


function Pokedex() {

    const [pokemon, setPokemon] = useState('')
    const [cargando, setCargando] = useState(false)

    const getPokemon = async (query) => {
        setCargando(true)
        const res = await fetchPokemon(query)
        const resultado = await res.json()
        setPokemon(resultado)
        setCargando(false)
    }

    return (
        <div>
            <Search getPokemon={getPokemon} />
            {!cargando && pokemon ? (
                <div>
                    <CardPokemon
                        name={pokemon?.name}
                        spriteFront={pokemon?.sprites.front_default}
                        spriteBack={pokemon?.sprites.back_default}
                        spriteShiny={pokemon?.sprites.front_shiny}
                        spriteFemale={pokemon?.sprites.front_female}
                        abilities={pokemon?.abilities}
                        stats={pokemon?.stats}
                        types={pokemon?.types}
                    />
                </div>) : null}
        </div>
    )
}

export default Pokedex