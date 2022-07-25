import { useState } from 'react'
import { Link } from 'react-router-dom'

function CardList({ id, name, imageFront, imageBack, type }) {

    const [imageSource, setImageSource] = useState(imageFront)

    const handleChangeImageFront = () => {
        setImageSource(imageFront)
    }

    const handleChangeImageBack = () => {
        setImageSource(imageBack)
    }

    return (
        <div className=''>
            <div onMouseOver={handleChangeImageBack} onMouseOut={handleChangeImageFront} className='w-28'>
                <img src={imageSource} alt={name} />
            </div >

            <h2 className='font-bold capitalize'>{name}</h2>
            <small className='capitalize'>{type}</small>

            <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>

            <Link to={`/pokemon/${name}`}>
                <img className='m-auto' src="https://img.icons8.com/color/30/000000/pokeball--v1.png" alt={id} />
                <p className='font-bold text-blue-600'>Pókedex</p>

            </Link>
        </div >

    )
}

export default CardList