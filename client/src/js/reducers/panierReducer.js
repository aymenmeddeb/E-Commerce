import {GET_PANIER_LOAD,GET_PANIER_SUCCES,GET_PANIER_FAIL,POST_PANIER,GET_PANIER} from '../constants/panier'


const initialstate = {
    paniers: [],
    panier: {},
    loadpanier: false,
    error: null,
    edit: false,
    msg: ""

}

export const paniersReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case GET_PANIER_LOAD: return { ...state, loadpanier: true }
        case GET_PANIER_SUCCES: return { ...state, paniers: payload, loadpanier: false }
        case GET_PANIER_FAIL: return { ...state, loadpanier: false, error: payload }
        case GET_PANIER: return { ...state,panier: payload, loadpanier: false }     
        case POST_PANIER: return { ...state, msg: payload }

        default:
            return state;
    }

}