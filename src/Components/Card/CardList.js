import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from "../../Context/GlobalState"

function CardList({ pokemon }) {

    const { addPokemonToFavorites, favoritos } = useContext(GlobalContext);

    const [imageSource, setImageSource] = useState(pokemon.sprites.front_default)

    const handleChangeImageFront = () => {
        setImageSource(pokemon.sprites.front_default)
    }

    const handleChangeImageBack = () => {
        setImageSource(pokemon.sprites.back_default)
    }

    let storedPokemon = favoritos.find(obj => obj.id === pokemon.id);

    const favoritosDisabled = storedPokemon ? true : false;

    return (

        <div>

            <div className='bg-gradient-to-r from-green-300 to-purple-400 flex justify-center items-center flex-col pb-4 shadow hover:shadow-lg border-gray-500 border-2 rounded-md m-2'>
                <div onMouseOver={handleChangeImageBack} onMouseOut={handleChangeImageFront}>
                    <img src={imageSource} alt={pokemon.name} />
                </div >

                <h2 className='font-bold capitalize' title='pokemonName'>{pokemon.name}</h2>
                <small className='capitalize' title='pokemonType'> Tipo: {pokemon.types[0].type.name}</small>

                <small className='text-center pb-4' title='pokemonBaseExp'>Experiencia Base: {pokemon.base_experience}</small>

                <div className='flex m-auto'>
                    <div className='flex pr-12'>

                        <Link to={`/pokemon/${pokemon.name}`}>
                            <img className='m-auto' src="https://img.icons8.com/color/30/000000/pokeball--v1.png" alt={pokemon.id} />
                            <p className='font-bold text-blue-600'>Pókedex</p>
                        </Link>
                    </div>
                    {!favoritosDisabled ? (<button type="button" onClick={() => addPokemonToFavorites(pokemon)} className='grid'>
                        <img className='m-auto' src="https://img.icons8.com/fluency/30/pixel-heart.png" alt={pokemon.id} />
                        <p className='font-bold text-blue-600'>Favorito</p>
                    </button>) : (<button type="button" disabled={favoritosDisabled} onClick={() => addPokemonToFavorites(pokemon)} className='grid'>
                        <img className='m-auto grayscale' src="https://img.icons8.com/fluency/30/pixel-heart.png" alt={pokemon.id} />
                        <p className='font-bold text-gray-600'>Favorito</p>
                    </button>)}


                </div>

            </div>
        </div >




    )
}

export default CardList