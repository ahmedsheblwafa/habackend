const express = require('express')
const {getAll,createOne,deleteOne,getOne,updateOne} = require('../Controllers/videos')

const videosRouter = express.Router()

videosRouter.route('/').get(getAll).post(createOne)
videosRouter.route('/:id').get(getOne).delete(deleteOne).patch(updateOne)

module.exports = {videosRouter}