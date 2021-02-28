import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from '../types';

const initalState = {
    loading: false, 
    errors: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initalState, action){
    switch(action.type){
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case CLEAR_ERRORS:
            return{
                ...state,
                loading: false,
                errors: null
            };
        case LOADING_UI:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}