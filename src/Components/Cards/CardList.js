import { useState } from 'react'

function Card({ id, name, imageFront, imageBack, type, link }) {

    const [imageSource, setImageSource] = useState(imageFront)

    const handleChangeImageFront = () => {
        setImageSource(imageFront)
    }

    const handleChangeImageBack = () => {
        setImageSource(imageBack)
    }

    return (
        <div className='flex items-center p-6 m-2 border-solid rounded-md min-w text-center shadow bg-gray-300'>
            <div onMouseOver={handleChangeImageBack} onMouseOut={handleChangeImageFront} className='w-28'>
                <img src={imageSource} alt={name} />
            </div>
            <div>
                <h2 className='font-bold capitalize'>{name}</h2>
                <small>{type}</small>
            </div>

            <div className='m-auto text-left'>
                <p>asdasdas</p>
            </div>
            <div className='rounded-2xl py-1.5 float-right'>
                <a href={`/pokemon/${name}`} onClick={link}>
                    <img className='m-auto' src="https://img.icons8.com/color/30/000000/pokeball--v1.png" alt={id} />
                    <p className='font-bold m-auto'> Atrápalo </p>
                    <p className='font-bold m-auto'>Ya!</p>
                </a>

            </div>


        </div >

    )
}

export default Card