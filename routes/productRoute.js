const express=require('express')
const Products=require('../models/ProductSchema');
const router=express.Router()

// method post
// path http://localhost:5000/products
router.post('/',async(req,res)=>{
 
    try {
   let newproduct= new Products ({...req.body})
   let result=await  newproduct.save();
   res.status(200).send({result,msg:'products saved'})     
    } catch (error) {
      res.status(400).send({msg:'products not saved'})
      console.log(error)  
    }
    
})
// method get
// path http://localhost:5000/products/all
router.get('/all',async(req,res)=>{
 
  try {
  let result=await Products.find();
 res.status(200).send({result,msg:'product getted'})     
  } catch (error) {
    res.status(400).send({msg:'product not get'})
    console.log(error)  
  }
})

// method getone
// path http://localhost:5000/products/:_id
router.get('/:id',async(req,res)=>{
 
  try {
  let result=await Products.findOne({_id:req.params.id});
 res.status(200).send({result,msg:'product one getted'})     
  } catch (error) {
    res.status(400).send({msg:'product one not get'})
    console.log(error)  
  }
})



// method delete
// path http://localhost:5000/products/add/:_id
router.delete('/:id',async(req,res)=>{
  try {
    let result= await Products.deleteOne({_id:req.params.id});
    if(result.n>0){res.status(200).send({result,msg:'product deleted'})}
     else{res.status(200).send({result,msg:'product already deleted'})}  
  } catch (error) {
    res.status(400).send({msg:'product not deleted'})
    console.log(error)  
  }
})

// method update
// path http://localhost:5000/products/:_id
router.put('/:id',async(req,res)=>{
  try {
    let result= await Products.updateOne({_id:req.params.id},{$set:{...req.body}});
    if(result.nModified>0){res.status(200).send({result,msg:'product updated'})}
     else{res.status(200).send({result,msg:'product already updated'})}  
  } catch (error) {
    res.status(400).send({msg:'product not updated'})
    console.log(error)  
  }
})

module.exports=router;