import axios from 'axios';

export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS'
export const ERROR = 'ERROR'
export const GET_ALL_EPISODES = 'GET_ALL_EPISODES'

export function getAllCharacters(){
    return async function(dispatch){
        try {
            const response = await axios.get('http://localhost:3001/character')
            const character = response.data;
            dispatch({
                type: GET_ALL_CHARACTERS,
                payload: character
            })

        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }
    }
}

export function getAllEpisodes(){
    return async function(dispatch){
        try {
            const response = await axios.get('http://localhost:3001/episode')
            const character = response.data;
            dispatch({
                type: GET_ALL_EPISODES,
                payload: character
            })

        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }
    }
}