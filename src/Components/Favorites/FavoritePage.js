import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalState'
import FavoriteCard from '../Card/FavoriteCard'


function FavoritePage() {

    const { favoritos } = useContext(GlobalContext)

    return (
        <div className=''>
            <br></br>
            <h1 className='text-5xl text-center'>Mis Pokémones Favoritos</h1>
            <br></br>
            {favoritos.length > 0 ? (
                <div className="pokemon-grid">
                    {favoritos.map((pokemon) => (
                        <FavoriteCard pokemon={pokemon} key={pokemon.id} type="favorites" />
                    ))}

                </div>
            ) : (
                <h2 className="no-pokemon text-center">No hay pokemones en tu lista de favoritos, agrega algunos!</h2>
            )}
        </div>


    )
}

export default FavoritePage