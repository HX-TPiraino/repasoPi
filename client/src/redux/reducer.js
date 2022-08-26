import { ERROR, GET_ALL_CHARACTERS, GET_ALL_EPISODES } from "./actions";

const initialState = {
    characters: [],
    error:{},
    episodes:[]
};

export default function rootReducer(state=initialState, action) {
    switch (action.type) {
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }

        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        case GET_ALL_EPISODES:
            return{
                ...state,
                episodes: action.payload
            }

        default:
            return state
    }
}

