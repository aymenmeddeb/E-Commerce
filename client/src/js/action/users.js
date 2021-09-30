import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, LOAD_USER, FAIL_USER, CURRENT_USER, TOGLLE_FALSE, TOGLLE_TRUE ,GET_USER,GET_USER_FAIL,GET_USER_LOAD } from '../constants/user'
import axios from 'axios'


export const RegisterUser = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER })
    try {
        const result = await axios.post('/user/register', user)//{newuser,msg,token}
        dispatch({ type: REGISTER_USER, payload: result.data });
        history.push("/")
    } catch (error) {
        const { errors, msg } = error.response.data
        if (Array.isArray(errors)) {
            errors.forEach((err) => alert(err.msg))
        }
        if (msg) {
            alert(msg)
        }
        dispatch({ type: FAIL_USER, payload: error.response.data })
    }
}

export const loginUser = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER })
    try {
        const result = await axios.post('/user/login', user)//{newuser,msg,token}
        dispatch({ type: LOGIN_USER, payload: result.data });
        history.push("/")
    } catch (error) {
        const { errors, msg } = error.response.data
        if (Array.isArray(errors)) {
            errors.forEach((err) => alert(err.msg))
        }
        if (msg) {
            alert(msg)
        }
        dispatch({ type: FAIL_USER, payload: error.response.data })
    }
}

export const CurrentUser = () => async (dispatch) => {
    dispatch({ type: LOAD_USER })
    const options = {
        headers: {
            authorization: localStorage.getItem('token')
        }
    }
    try {
        const result = await axios.get('/user/current', options)//user
        dispatch({ type: CURRENT_USER, payload: result.data.user });

    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data })
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT_USER

    }

}

export const editUser = (id) => async (dispatch) => {
    dispatch({ type: LOAD_USER })
    const options = {
        headers: {
            authorization: localStorage.getItem('token')
        }
    }
    try {
        let result = await axios.get(`/user/${id}`)
        dispatch({ type: CURRENT_USER, payload: result.data.result })
    } catch (error) {

    }

}

export const changeUser = (id, user) => async (dispatch) => {
    try {
        await axios.put(`/user/${id}`, user)
        dispatch(CurrentUser())
    } catch (error) {
        dispatch(error)
    }
}
export const ToglleActionFalse = () => {
    return {
        type: TOGLLE_FALSE
    }
}

export const ToglleActionTrue = () => {
    return {
        type: TOGLLE_TRUE
    }
}

export const getUser = () => async (dispatch) => {
    dispatch({ type: GET_USER_LOAD })
    try {
        let result = await axios.get("/user/all")
        dispatch({ type: GET_USER, payload: result.data.result })
    } catch (error) {
        dispatch({type: GET_USER_FAIL,  payload: error })
    }

}