const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const helmet=require('helmet')
var hpp=require('hpp')
const mongoSanitize=require('express-mongo-sanitize')
dotenv.config()
const path=require('path')


const app=express()
app.use(helmet())
app.disable('x-powered-by')
const user=require('./routes/UserRoutes')

app.use(cors())

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({
    limit: "30mb",
    extended: true,
  })
)
app.use(hpp())
app.use(mongoSanitize());
app.use('/', express.static(path.join(__dirname, 'public')))
app.get('/', ((req,res)=>{
  res.sendFile(path.join(__dirname,'./public/checkappv.html'))
}))
app.use('/api',user)




module.exports=app