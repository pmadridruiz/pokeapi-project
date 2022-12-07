import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalState';

const FavoriteCard = ({ pokemon }) => {

    const { removePokemonFromFavlist } = useContext(GlobalContext);
    return (
        <div>
            <div className='bg-gradient-to-r from-green-300 to-purple-400 flex justify-center items-center flex-col pb-4 shadow hover:shadow-lg border-gray-500 border-2 rounded-md m-2'>

                <div data-testid='pokemonCardImageFav'>
                    <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
                </div >

                <h2 className='font-bold capitalize' data-testid='pokemonNameFavCard'>{pokemon?.name}</h2>
                <small className='capitalize' data-testid='pokemonTypeFavCard'> Tipo: {pokemon?.types[0].type?.name}</small>

                <small className='text-center pb-4' data-testid='pokemonBaseExpFavCard'>Experiencia Base: {pokemon?.base_experience}</small>
                <div className=''>
                    <button data-testid='pokemonButtonFavCard' type="button" onClick={() => removePokemonFromFavlist(pokemon?.id)} className='grid btn-delete'>
                        <img className='m-auto grayscale' src="https://img.icons8.com/color/30/close-window.png" alt={pokemon?.id} />
                        <p className='font-bold text-blue-600'>Eliminar Favorito</p>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default FavoriteCard