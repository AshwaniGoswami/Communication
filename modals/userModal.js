const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({

    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    contact:{
        type:Number,
        required:true,
    },
    age:{
        type:Number,
    },
    address:{
        type:String,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
         
},
{timestamps:true}

)

var User=mongoose.model('User',userSchema)
module.exports=User