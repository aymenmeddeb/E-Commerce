const mongoose=require('mongoose');
const schema=mongoose.Schema;
const {ObjectId} =mongoose.Schema.Types;

const panierSchema=new schema({
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
        type:String,
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
    },
    user:{
        type:ObjectId,
        ref:'user'
    }
})

module.exports=mongoose.model('panier',panierSchema)
