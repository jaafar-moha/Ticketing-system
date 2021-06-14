const mongoose = require ('mongoose')
const userSchema=new  mongoose.Schema ({
firstName:{
    type:String,
    required:true
   
},
lastName:{
    type:String,
    required:true
   
},
email:{
    type:String,
    required:true
   
},
password:{
    type:String,
    required:true
   
},
phone:{
    type:String,
    required:true
   
},
department:{
    type:String,
    required:true
   
},
state:{
    type:String,
    required:true
},
role:{
    type:String,
    default: "user",
        enum: ["user","technicien","admin"]
}

},{timestamps: true})

const User = mongoose.model('User',userSchema)

module.exports = User