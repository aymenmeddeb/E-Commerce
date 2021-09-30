import React from 'react'
import { useSelector } from 'react-redux';
import {Route,Redirect} from 'react-router-dom'

const PrivateRoute = ({component:Component,...rest}) => {
    const user = useSelector(state => state.userReducer.user)
    const isAuth=localStorage.getItem("token");
    const isAdmin=user.isAdmin
    if(isAuth) {
    return    <Route component={Component} {...rest}/>
    }else
    { return <Redirect to='/signin'/>  }
    
}

export default PrivateRoute
