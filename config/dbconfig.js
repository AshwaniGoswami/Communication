const mongoose=require('mongoose')


const connectDB=async()=>{
try {
   await mongoose.connect("mongodb+srv://sheikh:anassheikh18@cluster0.nu3uiwu.mongodb.net/newMailComp?retryWrites=true").then((message)=>{
    console.log(`mongo is running at ${message.connection.host}`)
})
} catch (error) {
    console.log(error)
}

}


module.exports=connectDB