import { GET_PRODUCT_LOAD, GET_PRODUCT_SUCCES, GET_PRODUCT_FAIL, GET_PRODUCT, TOGLLE_FALSE, TOGLLE_TRUE, POST_PRODUCT } from "../constants/product";

const initialstate = {
    products: [],
    product: {},
    loadproducts: false,
    error: null,
    edit: false,
    msg: ""

}

export const productsReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_LOAD: return { ...state, loadproducts: true }
        case GET_PRODUCT_SUCCES: return { ...state, products: payload, loadproducts: false }
        case GET_PRODUCT_FAIL: return { ...state, loadproducts: false, error: payload }
        case GET_PRODUCT: return { ...state, product: payload, loadproducts: false }
        case TOGLLE_FALSE: return { ...state, edit: false }
        case TOGLLE_TRUE: return { ...state, edit: true }
        case POST_PRODUCT: return { ...state, msg: payload }

        default:
            return state;
    }

}