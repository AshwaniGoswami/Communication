const { default: mongoose } = require("mongoose")
const app = require("./app")
const connectDB = require("./config/dbconfig")

connectDB()



const PORT=process.env.PORT||4000


app.listen(PORT,()=>{
    console.log(`server is listening at PORT : ${PORT}`)
})


app.listen()