const Category = require('../Models/Categoreis') 


module.exports = {
    getAll:async(req,res)=>{
        try {
            res.status(200).send(await Category.find())
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    createOne:async(req,res)=>{
        try {
            const category = await Category.create(req.body)
            res.send(category)
        } catch (error) {
            res.send(error.message)
        }
    },
    deleteOne:async(req,res)=>{
        try {
            const {id} = req.params
            const category = await Category.findOne({_id:id})
            if(!category) return res.status(400).send({msg:"this user is not found"}) 
            await Category.deleteOne({_id:id})
            res.send(category)
        } catch (error) {
            res.send(error.message)
        }
    },
}  