import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalState'
import FavoriteCard from '../Card/FavoriteCard'

function HistoryPage() {

    const { vistos } = useContext(GlobalContext)

    return (
        <div className=''>
            <br></br>
            <h1 className='text-5xl text-center'>Pokémones Vistos</h1>
            <br></br>

            {vistos.length > 0 ? (
                <div className="pokemon-grid">
                    {vistos.map((pokemon) => (
                        <FavoriteCard pokemon={pokemon} key={pokemon.id} type="vistos" />
                    ))}

                </div>
            ) : (
                <h2 className="no-pokemon text-center">No has visto Pokémones, puedes buscarlos en la PokéDex o verlos en la Lista de Pokémones.</h2>
            )}
        </div>

    )
}

export default HistoryPage