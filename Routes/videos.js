const express = require('express')
const path = require("path")

const {getAll,createOne,deleteOne,getOne,updateOne} = require('../Controllers/videos')

const videosRouter = express.Router()


const multer  = require('multer')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"Images")
    },
    filename:(req,file,cb)=>{
        const name = Date.now() + path.extname(file.originalname)
        cb(null,name)
        req.body.thumbnail = "images/"+name
    }
})
const upload = multer({ storage: storage })




videosRouter.route('/').get(getAll).post(upload.single('thumbnail'),createOne)
videosRouter.route('/:id').get(getOne).delete(deleteOne).patch(updateOne)

module.exports = {videosRouter}