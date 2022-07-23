import React from 'react'

function Card({ id, name, image, type, link }) {
    return (
        <div onClick={link} className='flex items-center p-6 m-2 border-solid rounded-md min-w text-center shadow bg-gray-300'>
            <div className='w-28'>
                <img src={image} alt={name} />
            </div>
            <div>
                <h2 className='font-bold capitalize'>{name}</h2>
                <small>{type}</small>
            </div>

            <div className='m-auto text-left'>
                <p>asdasdas</p>
            </div>
            <div className='rounded-2xl py-1.5 float-right'>
                <img className='m-auto' src="https://img.icons8.com/color/30/000000/pokeball--v1.png" alt={id} />
                <small className=' m-auto'>Atrapalo Ya!</small>
            </div>


        </div>

    )
}

export default Card