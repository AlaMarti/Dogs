import axios from "axios"
import { GET_DOGS, PAGINATE } from "./Actions-Types"

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


export function page(order) {
    return function (dispatch){
        dispatch({
            type: PAGINATE,
            payload: order 
        })
    }
}