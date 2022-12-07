import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalState'
import HistoryCard from '../Card/HistoryCard'

function HistoryPage() {

    const { vistos } = useContext(GlobalContext)

    return (
        <div className=''>
            <br></br>
            <h1 className='text-5xl text-center'>Pokémones Vistos</h1>
            <br></br>

            {vistos?.length > 0 ? (
                <div className="grid grid-cols-4 content-center gap-1">
                    {vistos?.map((pokemon) => (
                        <HistoryCard pokemon={pokemon} key={pokemon?.id} type="vistos" />
                    ))}

                </div>
            ) : (
                <h2 className="no-pokemon text-center">No has visto Pokémones, puedes buscarlos en la PokéDex o verlos en la Lista de Pokémones.</h2>
            )}
        </div>

    )
}

export default HistoryPage