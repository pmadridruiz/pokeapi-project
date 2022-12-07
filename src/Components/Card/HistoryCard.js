import React from 'react'


const HistoryCard = ({ pokemon }) => {


    return (
        <div>
            <div className='bg-gradient-to-r from-green-300 to-purple-400 flex justify-center items-center flex-col pb-4 shadow hover:shadow-lg border-gray-500 border-2 rounded-md m-2'>
                <div data-testid='imageHistoryCard'>
                    <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
                </div>

                <h2 data-testid='nameHistoryCard' className='font-bold capitalize' title='pokemonName'>{pokemon?.name}</h2>
                <small className='capitalize' title='pokemonType'> Tipo: {pokemon?.types[0].type?.name}</small>

                <small className='text-center pb-4' title='pokemonBaseExp'>Experiencia Base: {pokemon?.base_experience}</small>

            </div>
        </div >
    )
}

export default HistoryCard