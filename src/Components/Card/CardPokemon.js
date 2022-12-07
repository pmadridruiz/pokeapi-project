import { useState } from 'react'

function CardPokemon(props) {

    const [imageSource, setImageSource] = useState(props.spriteFront)

    const handleChangeImageFront = () => {
        setImageSource(props.spriteFront)
    }

    const handleChangeImageBack = () => {
        setImageSource(props.spriteBack)
    }

    const handleChangeImageShiny = () => {
        setImageSource(props.spriteShiny)
    }

    const handleChangeImageFemale = () => {
        setImageSource(props.spriteFemale)

    }

    return (

        <div>
            <div className='inline-block text-center p-2 m-auto border-solid rounded'>
                <div className='flex flex-col shadow-md items-center justify-center p-6 m-2 border-solid rounded-md text-center bg-gradient-to-r from-rose-500 via-red-400 to-red-500'>
                    <h1 className='font-bold capitalize' data-testid='pokedex-card-pokeName'> {props?.name}</h1>
                    <img onMouseOver={handleChangeImageBack} onMouseOut={handleChangeImageFront} onClick={handleChangeImageFront} src={imageSource} alt={props?.name} title='pokedex-card-pokeImage' />
                    <h1 className='font-bold flex-col' data-testid='pokedex-card-pokeId'> ID: <div className='inline font-normal'>#{props?.id}</div></h1>
                    <div className='md:flex'>
                        <h1 className='font-bold'>Peso: <div className='inline font-normal' title='pokedex-card-pokeWeight'>{(props?.weight / 10).toFixed(1)} kg</div></h1>
                    </div>
                    <div className='md:flex pb-4'>
                        <h1 className='font-bold'>Experiencia Base: <div className='inline font-normal' title='pokedex-card-pokeBaseExp'>{props?.baseExp} </div></h1>
                    </div>

                    <div className='inline-block'>
                        <button onClick={handleChangeImageShiny} type="button" className="text-white bg-yellow-500 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
                            Shiny</button>
                        {props?.spriteFemale && <button onClick={handleChangeImageFemale} type="button" className=" text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                            Female</button>}
                    </div>

                    <div className='p-4 m-2'>
                        <h1 className='font-bold capitalize pb-2'>Tipos</h1>
                        {props?.types?.map((type, idx) => (
                            <div className='flex justify-center content-center' key={idx}>
                                <button disabled type="button" className=" m-2 items-center capitalize text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{type?.type?.name}</button>
                            </div>
                        ))}
                    </div>


                    <div className="p-4 m-2 rounded-md text-center ">
                        <h1 className='font-bold capitalize pb-2'>Habilidades</h1>
                        {props?.abilities?.map((ability, idx) => (
                            <div key={idx}>
                                <button disabled type="button" className="m-2 items-center capitalize text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{ability?.ability?.name}</button>
                            </div>
                        ))}
                    </div>



                </div >


                <div className="p-4 m-2 pb-8 shadow-md border-solid rounded-md text-center bg-gradient-to-r from-rose-500 via-red-400 to-red-500">
                    <h1 className='font-bold capitalize pb-4'>Movimientos</h1>
                    {props?.moves?.map((move, idx) => (
                        <div className='md:inline-block text-center m-1' key={idx}>
                            <button disabled type="button" className="capitalize text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{move?.move?.name}</button>
                        </div>
                    ))}
                </div>

                <div className="p-6 m-2 pb-7 shadow-md border-solid rounded-md text-center bg-gradient-to-r from-rose-500 via-red-400 to-red-500">
                    <h1 className='font-bold capitalize pb-2'>Estadísticas Base</h1>
                    {props?.stats?.map((stat, idx) => (
                        <div key={idx}>
                            <p className='text-black font-medium uppercase pt-2 pb-1'>{stat?.stat?.name}</p>
                            <div className="w-full bg-gray-200 rounded-full">
                                <div className="pb-1 rounded-full max-w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 text-xs font-medium py-[1px] text-center content-center"> {`${stat?.base_stat}`}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div>


                </div>

            </div>

        </div >

    )
}

export default CardPokemon