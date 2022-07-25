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
            <div className='text-center p-6 m-2 border-solid rounded-md shadow bg-red-400'>
                <div className='flex items-center p-6 m-2 border-solid rounded-md text-center shadow bg-red-400'>
                    <h1 className='font-bold capitalize' > {props.name}</h1>
                    <img onMouseOver={handleChangeImageBack} onMouseOut={handleChangeImageFront} onClick={handleChangeImageFront} src={imageSource} alt={props?.name} />

                    <button onClick={handleChangeImageShiny} type="button" class="text-white bg-yellow-500 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
                        Shiny</button>
                    {props?.spriteFemale && <button onClick={handleChangeImageFemale} type="button" class=" text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                        Female</button>}

                </div >

                <div className="p-6 m-2 border-solid rounded-md text-center shadow bg-red-400">
                    <h1 className='font-bold capitalize'>Habilidades</h1>
                    {props.abilities.map((ability, idx) => (
                        <div key={idx}>
                            <span className='capitalize'>{ability.ability.name}</span>
                        </div>
                    ))}
                    <br></br>
                    <h1 className='font-bold capitalize'>Tipos</h1>
                    {props.types.map((type, idx) => (
                        <div key={idx}>
                            <span >{type.type.name}</span>
                        </div>
                    ))}

                </div>

                <div className="p-6 m-2 text-black font bg-red-400 pb-7">
                    <h1 className='font-bold capitalize'>Estaditicas Base</h1>
                    {props.stats.map((stat, idx) => (
                        <div key={idx}>
                            <span>{stat.stat.name}</span>
                            <div className="w-full bg-gray-200 rounded-full">
                                <div className="rounded-full max-w-full text-white bg-indigo-400 text-xs font-medium py-[1px] text-center content-center" style={{ width: `${stat.base_stat}%` }}> {`${stat.base_stat}%`}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div >

































        // <div className='text-center p-6 m-2 border-solid rounded-md shadow bg-red-400'>
        //     <div className='flex items-center p-6 m-2 border-solid rounded-md text-center shadow bg-red-400'>
        //         <h1 h1 className='font-bold capitalize' > {props.name}</h1 >
        //         <img onMouseOver={handleChangeImageBack} onMouseOut={handleChangeImageFront} onClick={handleChangeImageFront} src={imageSource} alt={props?.name} />
        //         <button onClick={handleChangeImageShiny}>Shiny{' | '}</button>
        //         {props?.spriteFemale && <button onClick={handleChangeImageFemale}>{' | '}Female</button>}

        //     </div >

        //     <div className="p-6 m-2 border-solid rounded-md text-center shadow bg-red-400">
        //         <h1 className='font-bold capitalize'>Habilidades</h1>
        //         {props.abilities.map((ability, idx) => (
        //             <div key={idx}>
        //                 <span capitalize>{ability.ability.name}</span>
        //             </div>
        //         ))}
        //         <br></br>
        //         <h1 className='font-bold capitalize'>Tipos</h1>
        //         {props.types.map((type, idx) => (
        //             <div key={idx}>
        //                 <span >{type.type.name}</span>
        //             </div>
        //         ))}

        //     </div>

        //     <div className="p-6 m-2 text-black font bg-red-400 pb-7">
        //         <h1>Estaditicas Base</h1>
        //         {props.stats.map((stat, idx) => (
        //             <div key={idx}>
        //                 <span>{stat.stat.name}</span>
        //                 <div className="w-full bg-gray-200 rounded-full">
        //                     <div className="text-white bg-indigo-400 rounded text-xs font-medium py-[1px] text-center" style={{ width: `${stat.base_stat}%` }}> {`${stat.base_stat}%`}</div>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>

        // </div>
    )
}

export default CardPokemon