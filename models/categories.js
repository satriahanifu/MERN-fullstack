const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    body:{
        type:String,
        required:true,
    }    
})


module.exports = mongoose.model("Categories", CategorySchema)