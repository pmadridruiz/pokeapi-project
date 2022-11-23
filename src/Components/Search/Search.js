import { useState } from 'react'

function Search(props) {

    const [busqueda, setBusqueda] = useState('')

    const limpiarSearch = () => {
        setBusqueda('')
        document.getElementById('search-pokemon').reset()
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setBusqueda(event.target.value)
        if (busqueda === '') {
            alert('Pokemon no existe o campo vacio.')
            limpiarSearch()
            return
        }
        props.getPokemon(busqueda.toLowerCase())
        limpiarSearch()
    }

    return (
        <>
            <form onSubmit={handleSubmit} id='search-pokemon' onChange={(e) => setBusqueda(e.target.value)}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-black sr-only dark:text-black">Search</label>
                <div className="relative pt-2">
                    <div className="flex pt-2 absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-black dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="text" id="default-search" className="block p-4 pl-10 w-full text-sm bg-gray-200 rounded-lg text-black border-solid border-2 border-black" placeholder="Buscar Pókemon..." required />
                    <button onClick={handleSubmit} type="submit" className="block text-white absolute font-medium rounded-lg text-sm px-4 py-2 right-2.5 bottom-2.5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Buscar</button>
                </div>
            </form>

        </>
    )
}

export default Search