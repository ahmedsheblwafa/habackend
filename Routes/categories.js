const express = require('express')


const {getAll,createOne,deleteOne} = require('../Controllers/categories')

const categoriesRouter = express.Router()

categoriesRouter.route('/').get(getAll).post(createOne)
categoriesRouter.route('/:id').delete(deleteOne)

module.exports = {categoriesRouter}