import { ALGO } from "../actions/types";

const initialState = {
    algo: null
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ALGO:
            return {
                ...state,
                algo: payload
            }
        default:
            return state;
    }

}

export default rootReducer