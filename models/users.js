const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    userName:{
        type:String,
        require:true,
    },
    password:{
        type :String,
        required: true,
    },
    todos:{
        type:String,
        required:false
    }
    
})


module.exports = mongoose.model("users", UserSchema)