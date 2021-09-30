const express=require('express');
const User=require('../models/userSchema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const route=express.Router();
const {loginRules,registerRules,validation} =require('../middelware/validator')
const isAuth=require('../middelware/passport')

// signup
// http://localhost:5000/user/register
route.post('/register',registerRules(),validation,async(req,res)=>{
    try {
      const {name,lastname,email,password,isAdmin,phone,adresse,company}=req.body
//check email 
    const searchemail=await User.findOne({email})
    if(searchemail)  
    {res.status(400).send({msg:'email already exist'})}
    else{
// hash password
    const salt = 10;
     await bcrypt.hash(password, salt,async(err, hash)=>{
       try {
     const newuser=await new User({name,lastname,email,password:hash,isAdmin,phone,adresse,company})
     await newuser.save()   
      // creation token
const payload={
    _id:newuser._id,
    name:newuser.name
}
const token=await jwt.sign(payload,process.env.secretOrPrivateKey,{expiresIn:3600})  

        res.status(200).send({user:newuser,msg:'user is saved',token:`Bearer ${token}`})  
       } catch (error) {
        res.status(500).send({msg:'error'}) 
       }
     
    })
}
    } catch (error) {
     res.status(400).send({msg:'user is not saved'})   
    }
})

// login
route.post('/login',loginRules(),validation,async(req,res)=>{
    const {email,password}=req.body
    try {

// check user
 const searchuser=await User.findOne({email})
 
// if email not exist
if(!searchuser){
    return res.status(400).send({msg:'bad credential'})
}

// check password
const chechpassword=await bcrypt.compare(password,searchuser.password)
if(!chechpassword){
    return  res.status(400).send({msg:'bad credential'})
}
// creation token
const payload={
    _id:searchuser._id,
    name:searchuser.name
}
const token=await jwt.sign(payload,process.env.secretOrPrivateKey,{expiresIn:3600})

// get user
 res.status(200).send({user:searchuser,msg:"success",token:`Bearer ${token}`})       
    } catch (error) {
        res.status(500).send({msg:'wrong login'})
    }
})

route.get('/current',isAuth(),async(req,res)=>{
try {
   await res.status(200).send({user:req.user})
  
} catch (error) {
    console.log(error)
    
}
})

//apdate user
route.put('/:id',async(req,res)=>{
    try {
    const {name,lastname,email,password,isAdmin,phone,adresse,company}=req.body
      let result= await User.updateOne({_id:req.params.id},{$set:{...req.body}});
      if(result.nModified>0){res.status(200).send({result,msg:'user updated'})}
       else{res.status(200).send({result,msg:'user already updated'})}  
    } catch (error) {
      res.status(400).send({msg:'user not updated'})
      console.log(error)  
    }
  })
  route.get('/all',async(req,res)=>{
 
    try {
    let result=await User.find();
   res.status(200).send({result,msg:'user getted'})     
    } catch (error) {
      res.status(400).send({msg:'user not get'})
      console.log(error)  
    }
  })


module.exports=route
