console.clear();
const express=require('express');
require('dotenv').config();

var app=express();
app.use(express.json());

const connectDB=require('./config/connectDB');
connectDB();

const IndexRoute=require('./routes/userRoute');
app.use('/user',IndexRoute)
app.use('/products', require('./routes/productRoute'))
app.use('/panier', require('./routes/panierRoute'))

const PORT=process.env.PORT;
app.listen(PORT,(err)=>{
    if(err){console.log(error)}
    else(console.log(`server is running on ${PORT}`))
})