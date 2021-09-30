import axios from 'axios'
import { GET_PANIER_LOAD, GET_PANIER_SUCCES, GET_PANIER_FAIL, POST_PANIER, DELETE_PANIER } from '../constants/panier'

export const getPanier = () => async (dispatch) => {
  dispatch({ type: GET_PANIER_LOAD })
  try {
    let result = await axios.get("/panier/all")
    dispatch({ type: GET_PANIER_SUCCES, payload: result.data.result })
  } catch (error) {
    dispatch({ type: GET_PANIER_FAIL, payload: error })
  }

}
export const postPanier = (panier) => async (dispatch) => {
  const options={
    headers:{
 authorization:localStorage.getItem('token')
    }}
  try {
    
    let result = await axios.post("/panier", panier,options)
    dispatch({ type: POST_PANIER ,payload:result.data.msg})
    dispatch(getPanier())
    dispatch({ payload: result.data.msg })
  } catch (error) {
    
  }

}
export const deletePanier = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PANIER })
  try {
    await axios.delete(`/panier/${id}`)
    dispatch(getPanier())
  } catch (error) {
    dispatch(error)
  }

}