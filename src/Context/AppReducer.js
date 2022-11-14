/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch (action.type) {
        case "ADD_POKEMON_TO_FAVORITES":
            return {
                ...state,
                favoritos: [action.payload, ...state.favoritos]
            }
        default:
            return state;

    }
};