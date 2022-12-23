const mongoose=require('mongoose')


const connectDB=async()=>{
try {
   await mongoose.connect(process.env.MONGOURI).then((message)=>{
    console.log(`mongo is running at ${message.connection.host}`)
})
} catch (error) {
    console.log(error)
}

}


module.exports=connectDB
