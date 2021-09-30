const express=require('express')
const Panier=require('../models/panierSchema');
const router=express.Router()
const isAuth=require('../middelware/passport')

// method post
// path http://localhost:5000/panier
router.post('/',isAuth(),async(req,res)=>{
 
    try {

   let newpanier= new Panier ({...req.body,user:req.user})
   let result=await  newpanier.save();
   res.status(200).send({result,msg:'product added successfully'})     
    } catch (error) {
      res.status(400).send({msg:'product not added '})
      console.log(error)  
    }
    
})
// method get
// path http://localhost:5000/panier/all
router.get('/all',async(req,res)=>{
 
    try {
    let result=await Panier.find();
   res.status(200).send({result,msg:'panier getted'})     
    } catch (error) {
      res.status(400).send({msg:'panier not get'})
      console.log(error)  
    }
  })

  router.delete('/:id',async(req,res)=>{
    try {
      let result= await Panier.deleteOne({_id:req.params.id});
      if(result.deletedCount>0){res.status(200).send({result,msg:'panier deleted'})}
       else{res.status(200).send({result,msg:'panier already deleted'})}  
    } catch (error) {
      res.status(400).send({msg:'panier not deleted'})
      console.log(error)  
    }
  }) 

module.exports=router;