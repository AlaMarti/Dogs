import { GET_DOGS, PAGINATE } from "../Action/Actions-Types"


let initialState ={
    allDogs:[],
    allRaza:[],
    allDogsBackup:[],
    currentPage : 0
}

function rootReducer(state = initialState, action ){
    const ITEMS_PERPAGE = 8

    switch(action.type){
        case GET_DOGS: 
            return{
                ...state,
                allDogs: [...action.payload].splice(0, ITEMS_PERPAGE),
                allDogsBackup: action.payload,
            }

        case PAGINATE:
            const next_page = state.currentPage + 1;
            const prev_page = state.currentPage - 1;
            const index =    action.payload === "next" ? next_page * ITEMS_PERPAGE : prev_page * ITEMS_PERPAGE

            if(action.payload === "next" && index >= state.allDogsBackup.length ) return state
            else if(action.payload === "prev" && index < 0 ) return  state

            return{
                ...state,
                allDogs: [...state.allDogsBackup].splice(index, ITEMS_PERPAGE),
                currentPage: action.payload === "next" ? next_page : prev_page
                
            }
        

        default: return state
            break
        
    }

}

export default rootReducer