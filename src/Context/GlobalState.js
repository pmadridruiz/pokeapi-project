import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from "./AppReducer";

const initialState = {
    favoritos: localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) : [],
    vistos: localStorage.getItem('vistos') ? JSON.parse(localStorage.getItem('vistos')) : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(state.favoritos))
        localStorage.setItem('vistos', JSON.stringify(state.vistos))
    }, [state]);


    const addPokemonToFavorites = pokemon => {
        dispatch({ type: "ADD_POKEMON_TO_FAVORITES", payload: pokemon })
    }

    return (
        <GlobalContext.Provider value={{ favoritos: state.favoritos, vistos: state.vistos, addPokemonToFavorites }}>
            {props.children}
        </GlobalContext.Provider>
    )
}