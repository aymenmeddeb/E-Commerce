const mongoose=require('mongoose')

const connectDB= async() => {
    try {
       await mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true,useUnifiedTopology: true }) 
       console.log('DB is connected')
    } catch (error) {
        console.log('DB disconnected')
    }
}
module.exports=connectDB;