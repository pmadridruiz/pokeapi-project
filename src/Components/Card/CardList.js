import { useState } from 'react'
import { Link } from 'react-router-dom'

function CardList({ id, name, imageFront, imageBack, type, baseExp }) {

    const [imageSource, setImageSource] = useState(imageFront)

    const handleChangeImageFront = () => {
        setImageSource(imageFront)
    }

    const handleChangeImageBack = () => {
        setImageSource(imageBack)
    }

    return (

        <Link to={`/pokemon/${name}`} className='bg-gradient-to-r from-green-300 to-purple-400 flex justify-center items-center flex-col pb-4 shadow hover:shadow-lg border-gray-500 border-2 rounded-md m-2'>
            <div onMouseOver={handleChangeImageBack} onMouseOut={handleChangeImageFront}>
                <img src={imageSource} alt={name} />
            </div >

            <h2 className='font-bold capitalize'>{name}</h2>
            <small className='capitalize'> Tipo: {type}</small>

            <small className='text-center pb-4'>Experiencia Base: {baseExp}</small>

            <div>
                <img className='m-auto' src="https://img.icons8.com/color/30/000000/pokeball--v1.png" alt={id} />
                <p className='font-bold text-blue-600'>Pókedex</p>
            </div>
        </Link>

    )
}

export default CardList