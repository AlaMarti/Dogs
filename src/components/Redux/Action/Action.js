import axios from "axios"
import { GET_DOGS } from "./Actions-Types"

export function getDog(state){
    return async function (dispatch){
        try{
            const response =  await axios.get("http://localhost:3001/dog")
            dispatch({type: GET_DOGS , payload: response.data})

        } catch(error){
            console.log(error)
        }

    }
}