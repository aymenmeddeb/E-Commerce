const mongoose=require('mongoose');
const schema=mongoose.Schema;

const productSchema=new schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rate:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:false
    },
    img:{
        type:String,
        required:false
    }
})

module.exports=mongoose.model('products',productSchema)
