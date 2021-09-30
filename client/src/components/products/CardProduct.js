import React, { useState } from 'react';
import { useDispatch,useSelector} from "react-redux"
import ListCommand from '../commande/ListCommand';
import { postPanier } from "../../js/action/panier"
import { deleteProduct } from '../../js/action/product';
import { Rating } from 'semantic-ui-react'
import Modal from 'react-bootstrap/Modal'
import './card.css';



const CardProduct = ({ produit }) => {
 
  const isAdmin = useSelector(state => state. userReducer.isAdmin)
  const user = useSelector(state => state.userReducer.user)
  const [lgShow, setLgShow] = useState(false);
  const dispatch = useDispatch()

  const [rating, setRating] = useState(0);
      function handleChangeOnRate(e) {
        e.preventDefault();
        setRating(e.target.value);}

  return (

    <div className="container-1" >
    
    <img src={produit.img} className="card-image" />
      <div className="overlay" >
   
        <div className="items" />
        
        <div className="items head">
          <p>{produit.name}</p>
          <p>{produit.description}</p>
          <hr />
        </div>
        <div className="items price">
          <p className="old">{produit.price}DT</p>
          
          <Rating icon='heart'  defaultRating={1} maxRating={5} value={rating}
          onRate={(e) => { handleChangeOnRate(e) }}  />
        </div>
        <div className="items cart">
          <i className="fa fa-shopping-cart" />
          <a onClick={async () => await dispatch(postPanier(produit), setLgShow(true))}>  <span>ADD TO CART</span></a>
         {user.isAdmin ? <a onClick={async()=>await dispatch(deleteProduct(produit._id))}> <span>Delete</span></a> :null} 
         
          <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body><ListCommand /></Modal.Body>
          </Modal>
        </div>
      </div>
    </div>

  )
}

export default CardProduct

