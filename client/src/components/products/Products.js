import React, { useEffect, useState } from 'react'
import CardProduct from './CardProduct'
import { getProduct } from '../../js/action/product';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button'
import './card.css';



const Products = () => {
  const dispatch = useDispatch();
  const loadproducts = useSelector(state => state.productsReducer.loadproducts)
  const products = useSelector(state => state.productsReducer.products)
  const product = useSelector(state => state.productsReducer.product)
  const [category, setCategory] = useState("")
  const [Search, setSearch] = useState("")
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    dispatch(getProduct())

  }, [dispatch])
  return (
    <div className="body">
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-md-9">
            <p className=" mr-2">Filters :<span ></span>
              <span >
                <Button
                  variant="outline-primary"
                  type="button"
                  className="catego"
                  onClick={() => setCategory("")}
                >All</Button>
              </span>
              <span >
                <Button
                  variant="outline-success"
                  type="button"
                  className="catego"
                  onClick={() => setCategory("chaussure")}
                >Chaussures</Button>
              </span>

              <span >
                <Button
                  variant="outline-info"
                  type="button"
                  className="catego"
                  onClick={() => setCategory("chemise")}
                >Chemises</Button>
              </span>
              <span >
                <Button
                  variant="outline-danger"
                  type="Button"
                  className="catego"
                  onClick={() => setCategory("montre")}
                >Montres</Button>
              </span>
            </p>
          </div>

        </div>
      </div>

      <br />

      <div className="section1">
        <div className="section2">
          <form action="">
            <div className="p-2 bg-light rounded rounded-pill shadow-sm mb-4">
              <div className="input-group">
                <input type="search" placeholder="search" aria-describedby="button-addon1" className="form-control border-0 bg-light" onChange={handleChange} />
                <div className="input-group-append">
                  <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg></i></button>
                </div>
              </div>
            </div>
          </form><div className="row">
            <div className="col-32" onClick={(e) => e.preventDefault()}>
              <div className="list-group" id="list-tab" role="tablist">
                <a onClick={() => setCategory("")} className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="/products" role="tab" aria-controls="home">ALL</a>
                <a onClick={() => setCategory("chaussure")} className="list-group-item list-group-item-action" data-toggle="list" href="" role="tab" aria-controls="profile">Chaussures</a>
                <a onClick={() => setCategory("chemise")} className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="" role="tab" aria-controls="messages">Chemises</a>
                <a onClick={() => setCategory("montre")} className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="" role="tab" aria-controls="settings">Montres</a>
              </div></div>
          </div> </div>
        <div className="list">
          {loadproducts ? <div className="ui active centered inline loader"></div> : (
            products
              .filter(el =>
                el.category.includes(category))
              .filter(el =>
                el.name.toLowerCase().includes((Search).toLowerCase()))
              .map(el => <CardProduct key={el._id} produit={el} />))}
        </div>
      </div>
    </div>
  )
}

export default Products
