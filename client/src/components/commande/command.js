import React from 'react'
import {useDispatch } from "react-redux"
import { deletePanier } from '../../js/action/panier';
import delet from "./delet.png"
import "./command.css"

export const Command = ({panier}) => {
 const dispatch = useDispatch()
    return (
        
        <tr>
        <td><img src={panier.img} alt="img4" style={{width:"25px",height:"25px"}}/> </td>
        <td>{panier.name}</td>
        <td>In stock</td>
        <td><input className="form-control" type="number" /></td> 
        <td className="text-right">{panier.price}DT</td>
        <td className="text-right"><button onClick={async()=>await dispatch(deletePanier(panier._id))} className="btn btn-sm btn-danger">delete <img src={delet} height="15px" width="15px" alt='img5'/> </button> </td>
       </tr>
       
    )
}
