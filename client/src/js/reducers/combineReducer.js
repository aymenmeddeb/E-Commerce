import {combineReducers} from 'redux'
import { productsReducer } from './productReducer'
import { userReducer } from './userReducers'
import {paniersReducer} from './panierReducer'

export const rootReducer=combineReducers({userReducer,productsReducer,paniersReducer})