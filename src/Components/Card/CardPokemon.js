import { useState } from 'react'


function CardPokemon({ id, name, imageFront, imageBack, type, weight, abilities, basexp }) {


    const [imageSource, setImageSource] = useState(imageFront)

    const handleChangeImageFront = () => {
        setImageSource(imageFront)
    }

    const handleChangeImageBack = () => {
        setImageSource(imageBack)
    }


    return (
        <>
            <div className="flex justify-center pt-10">
                <div onMouseOver={handleChangeImageBack} onMouseOut={handleChangeImageFront} className="flex flex-col md:flex-row md:max-w-xl rounded-lg shadow-xl bg-white">
                    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={imageSource} alt="" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                        <div className="text-gray-700 text-base mb-4">
                            <p>Base Experience: {basexp}</p>
                            <p> {abilities}</p>
                        </div>
                        <p className="text-gray-600 text-xs">Weight: {weight}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPokemon