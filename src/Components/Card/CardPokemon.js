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
        <>

            <div className="mt-2 text-white bg-gray-800">
                <h1 className='font-bold capitalize'>{props.name}</h1>
                <img onMouseOver={handleChangeImageBack} onMouseOut={handleChangeImageFront} onClick={handleChangeImageFront} src={imageSource} alt={props.name} />
                <button onClick={handleChangeImageShiny}>Shiny{' | '}</button>

                <button onClick={handleChangeImageFemale}>{' | '}Female</button>

            </div>

            <div className="mt-2 text-white bg-slate-400">
                <h1 className='font-bold capitalize'>Habilidades</h1>
                {props.abilities.map((ability, idx) => (
                    <div key={idx}>
                        <span>{ability.ability.name}</span>
                    </div>
                ))}
                <br></br>
                <h1>Tipos</h1>
                {props.types.map((type, idx) => (
                    <div key={idx}>
                        <span>{type.type.name}</span>
                    </div>
                ))}

            </div>

            <div className="mt-2 text-white bg-red-400">
                <h1>Estaditicas Base</h1>
                {props.stats.map((stat, idx) => (
                    <div key={idx}>
                        <span>{stat.stat.name}</span>
                        <div class="w-full bg-gray-200 rounded-full">
                            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{ width: `${stat.base_stat}` }}> {`${stat.base_stat}%`}</div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default CardPokemon