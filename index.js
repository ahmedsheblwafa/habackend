const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const {videosRouter} = require('./Routes/videos')

const app = express()
mongoose.connect('mongodb+srv://shebl:KPgn752Tgcfla0bz@cluster0.xoashpz.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log("con");
    })
    .catch(err=>{
        console.log(err);
    })

   

app.use(express.json())
app.use(cors())
app.use("/videos",videosRouter)

app.get("/",(req,res)=>{
    res.send("hello from app ")
})

const PORT = process.env.PORT ||5000

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
})