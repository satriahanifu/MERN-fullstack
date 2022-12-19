const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

// setup port
app.listen(3001,()=>{
    console.log("server is running")
})

// setup db
mongoose.connect("mongodb+srv://User123:Password123@mernportofolio.1ca1iek.mongodb.net/test")

// route register
const indexRouter = require("./routes1/index");
const userRouter = require("./routes1/Users")

app.use("/",indexRouter)
app.use("/user",userRouter)