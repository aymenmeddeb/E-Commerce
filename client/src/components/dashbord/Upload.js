import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {postProduct} from "../../js/action/product"
import './upload.css'

const Upload = () => {
  const dispatch = useDispatch()
  const [product, setProduct] = useState({name:"",description:"",category:"",price:"",rate:"",img:"",company:""})
 const handlechange=async(e)=>{
  e.preventDefault();
await  setProduct({...product,[e.target.name]:e.target.value});
}
    return (
        <div>
        <section className="get-in-touch">
        <h2 className="title">Poster</h2>
        <form className="contact-form row">
          <div className="form-field col-lg-6">
            <input name="name" className="input-text js-input" type="text" onChange={handlechange} required />
            <label className="label" htmlFor="name">Name</label>
          </div>
          <div className="form-field col-lg-6 ">
            <input name="description" className="input-text js-input" type="text" onChange={handlechange} required />
            <label className="label" htmlFor="email">description</label>
          </div>
          <div className="form-field col-lg-6 ">
            <input name="rate" className="input-text js-input" type="text" onChange={handlechange} required />
            <label className="label" htmlFor="company">rate</label>
          </div>
          <div className="form-field col-lg-6 ">
            <input name="category" className="input-text js-input" type="text" onChange={handlechange} required />
            <label className="label" htmlFor="phone">category</label>
          </div>
          <div className="form-field col-lg-12">
            <input name="price" className="input-text js-input" type="text" onChange={handlechange} required />
            <label className="label" htmlFor="message">price</label>
          </div>
          <div className="form-field col-lg-12">
            <input name="price" className="input-text js-input" type="text" onChange={handlechange} required />
            <label className="label" htmlFor="message">Picture</label>
          </div>
          <div className="form-field col-lg-12">
            <input name="price" className="input-text js-input" type="text" onChange={handlechange} required />
            <label className="label" htmlFor="message">Company</label>
          </div>
          <div className="form-field col-lg-12">
            <input className="submit-btn" type="submit" defaultValue="Submit" onClick={async()=>await dispatch(postProduct(product))} />
          </div>
        </form>
      </section>   
        </div>
    )
}

export default Upload
