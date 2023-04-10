const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const AdminRoute = require("./Routes/auth")
const NewsRoute = require("./Routes/news")
const PastPapersRoute = require("./Routes/pastpapers")
const TestRoute = require("./Routes/test")
const FaqRoute = require("./Routes/faq")
const cors = require("cors")
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors({
    origin:"https://nedadmin.netlify.app",
    methods:["GET","POST","PUT","DELETE"]
}))
const connect = ()=>{
    mongoose.connect(process.env.MONGOURL).
    then(()=>console.log("Db Connection Successfull"))
    .catch((err)=>{
        throw err
    })
}
app.use("/api/faq",FaqRoute)
app.use("/api/test",TestRoute)
app.use("/api/pastpapers",PastPapersRoute)
app.use("/api/news",NewsRoute)
app.use("/api/auth",AdminRoute)
app.listen(process.env.PORT,()=>{
    connect()
    console.log(`Server Started at Port ${process.env.PORT}`)
})
