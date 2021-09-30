import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, LOAD_USER, FAIL_USER, CURRENT_USER, TOGLLE_FALSE, TOGLLE_TRUE, GET_USER, GET_USER_LOAD } from '../constants/user'

const initialstate = {
    users: [],
    loaduser: false,
    loadusers: false,
    user: {},
    error: null,
    isAuth: false,
    edit: false
}
export const userReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case LOAD_USER: return { ...state, loaduser: true };
        case GET_USER_LOAD: return { ...state, loadusers: true };

        case REGISTER_USER:
            localStorage.setItem('token', payload.token);
            return { ...state, loaduser: false, user: payload.user, isAuth: true };

        case LOGIN_USER:
            localStorage.setItem('token', payload.token);
            return { ...state, loaduser: false, user: payload.user, isAuth: true };

        case LOGOUT_USER:
            localStorage.removeItem('token');
            return { loaduser: false, user: {}, error: null, isAuth: false };

        case CURRENT_USER:
            return { ...state, loaduser: false, user: payload, isAuth: true };
            
        case GET_USER:
            return { ...state, loadusers: false, users: payload };

        case FAIL_USER:
            return { ...state, loaduser: false, error: payload };
        case TOGLLE_FALSE:
            return { ...state, edit: false }
        case TOGLLE_TRUE:
            return { ...state, edit: true }



        default:
            return state;


    }
}