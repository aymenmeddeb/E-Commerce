import { GET_PRODUCT_LOAD, GET_PRODUCT_SUCCES, GET_PRODUCT_FAIL, DELETE_PRODUCT, GET_PRODUCT } from "../constants/product";
import axios from 'axios'

export const getProduct = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOAD })
  try {
    let result = await axios.get("/products/all")
    dispatch({ type: GET_PRODUCT_SUCCES, payload: result.data.result })
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error })
  }

}


export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT })
  try {
    await axios.delete(`/products/${id}`)
    dispatch(getProduct())
  } catch (error) {
    dispatch(error)
  }

}
export const editProduct = (id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOAD })
  try {
    let result = await axios.get(`/products/${id}`)
    dispatch({ type: GET_PRODUCT, payload: result.data.result })
  } catch (error) {
    dispatch(error)
  }

}

export const postProduct = (product) => async (dispatch) => {

  try {
    let result = await axios.post("/products", product)
    dispatch(getProduct())
    dispatch({ payload: result.data.msg })
  } catch (error) {

  }

}
export const changeProduct = (id, product) => async (dispatch) => {
  try {
    await axios.put(`/products/${id}`, product)
    dispatch(getProduct())
  } catch (error) {
    dispatch(error)
  }
}
export const getOneProduct = (_id, product,history) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOAD })
  try {
    let result = await axios.get(`/products/${_id}`, product)
    dispatch({ type: GET_PRODUCT, payload: result.data.result });
    dispatch(postProduct(product))
  
   
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error })
  }

}
