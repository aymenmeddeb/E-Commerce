const {check,validationResult}=require('express-validator')


exports.registerRules=()=>
    [
    check("name","name is required").notEmpty(),
    check("lastname","lastname is required").notEmpty(),
    check("email","email is required").notEmpty(),
    check("email","check email again").isEmail(),
    check("password","the length password maust be between 5 and 12 character").isLength({
        min:5,
        max:12,
    })]


exports.loginRules=()=>
    [
    check("email","email is required").notEmpty(),
    check("email","check email again").isEmail(),
    check("password","the length password maust be between 5 and 12 character").isLength({
        min:5,
        max:12,
    })]



exports.validation=(req,res,next)=>{
   const errors=validationResult(req)
   console.log(errors)
   if(!errors.isEmpty()){
  return res.status(400).send({errors:errors.array().map(el=>({msg:el.msg}))})
   }
   next();
}