import { GET_DOGS } from "../Action/Actions-Types"


let initialState ={
    allDogs:[],
    allRaza:[] 
}

function rootReducer(state = initialState, action ){
    switch(action.type){
        case GET_DOGS: 
            return{
                ...state,
                allDogs: action.payload
            }
            break;

        default: return state
            break
        
    }

}

export default rootReducer