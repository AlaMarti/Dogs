import { GET_DOGS, PAGINATE } from "../Action/Actions-Types"


let initialState ={
    allDogs:[],
    allRaza:[],
    allDogsBackup:[],
    currentPage : 0,
    numpage : 1
}

function rootReducer(state = initialState, action ){
    let auxPage = 1;
    console.log(action.payload)
    const ITEMS_PERPAGE = 8

    switch(action.type){
        case GET_DOGS:
            auxPage = Math.ceil(action.payload.length/ITEMS_PERPAGE) 
            return{
                ...state,
                allDogs: [...action.payload].splice(0, ITEMS_PERPAGE),
                allDogsBackup: action.payload,
                numpage: auxPage
            }

        case PAGINATE:
            const next_page = state.currentPage + 1;
            const prev_page = !isNaN(action.payload)?action.payload : state.currentPage - 1;
            const index =    action.payload === "next" ? next_page * ITEMS_PERPAGE : prev_page * ITEMS_PERPAGE

            if(action.payload === "next" && index >= state.allDogsBackup.length ) return state
            else if(action.payload === "prev" && index < 0 ) return  state

            return{
                ...state,
                allDogs: [...state.allDogsBackup].splice(index, ITEMS_PERPAGE),
                currentPage: action.payload === "next" ? next_page : prev_page,
                
            }
        

        default: return state
        
    }

}

export default rootReducer