import { useState } from 'react'

function Search(props) {

    const [busqueda, setBusqueda] = useState('')

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            setBusqueda(event.target.value)
            if (busqueda === '') {
                return alert('Pokemon no existe o campo vacio.')
            }
        }
    }

    const handleOnClick = (event) => {
        event.preventDefault()
        setBusqueda(event.target.value)
        if (busqueda === '') {
            return alert('Pokemon no existe o campo vacio.')
        }
        props.getPokemon(busqueda.toLowerCase())
    }

    return (
        <>
            <form className='' onChange={(e) => setBusqueda(e.target.value)}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-black sr-only dark:text-black">Search</label>
                <div className="relative pt-2">
                    <div className="flex pt-2 absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-black dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onSubmit={handleKeyDown} type="text" id="default-search" className="block p-4 pl-10 w-full text-sm bg-gray-200 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-black text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar Pókemon..." required />
                    <button onClick={handleOnClick} type="submit" className="block text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
                </div>
            </form>

        </>
    )
}

export default Search