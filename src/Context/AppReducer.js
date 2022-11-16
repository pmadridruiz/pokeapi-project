/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch (action.type) {
        case "ADD_POKEMON_TO_FAVORITES":
            return {
                ...state,
                favoritos: [action.payload, ...state.favoritos]
            };
        case "REMOVE_FROM_FAVORITES":
            return {
                ...state,
                favoritos: state.favoritos.filter(pokemon => pokemon.id !== action.payload)
            };

        case "ADD_POKEMON_TO_HISTORY":
            return {
                ...state,
                vistos: [action.payload, ...state.vistos]
            }
        default:
            return state;

    }
};