const Video = require('../Models/Videos') 
const path = require('path')





module.exports = {
    getAll:async(req,res)=>{
        try {
            // const {role} = req.user
            // if(role!="admin") return res.status(401).send({msg:"unautherized user"})
            res.status(200).send(await Video.find())
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    getOne:async(req,res)=>{
        try {
            const {id} = req.params
            // const {role,_id} = req.user
            // if(role!="admin"&&id!=_id) return res.status(401).send({msg:"unautherized user"})
            const video = await Video.findOne({_id:id})
            if(!video) return res.status(400).send({msg:"this user is not found"}) 
            res.status(200).send(video)
        } catch (error) {
            res.send(error.message);
        }
    },
    createOne:async(req,res)=>{
        try {
            // const {role} = req.user
            // if(role!="admin") return res.status(401).send({msg:"unautherized user"})
            // const searchUser = await User.findOne({email:req.body.email})
            // if(searchUser) return res.send({msg:"this email already exists"}) 
            // let {password} = req.body
            // const salt =await bcrypt.genSalt(8);
            // const hash =await bcrypt.hash(password, salt);
            console.log(req.body);
            const video = await Video.create(req.body)
            res.send(video)
        } catch (error) {
            res.send(error.message)
        }
    },
    updateOne:async(req,res)=>{
        try {
            const {id} = req.params
            // const {role,_id} = req.user
            // if(role!="admin"&&id!=_id) return res.status(401).send({msg:"unautherized user"})
            const video = await Video.findOne({_id:id})
            if(!video) return res.status(400).send({msg:"this user is not found"}) 
            // const {password} = req.body
            // if(password) {
            //     const salt =await bcrypt.genSalt(8);
            //     const hash =await bcrypt.hash(password, salt);
            //     await User.updateOne({_id:id},{...req.body,password:hash})
            // }
            res.send({...video._doc,...req.body})        
        } catch (error) {
            res.send(error.message)
        }
    },
    deleteOne:async(req,res)=>{
        try {
            const {id} = req.params
            // const {role,_id} = req.user
            // if(role!="admin"&&id!=_id) return res.status(401).send({msg:"unautherized user"})
            const video = await Video.findOne({_id:id})
            if(!video) return res.status(400).send({msg:"this user is not found"}) 
            await User.deleteOne({_id:id})
            res.send(video)
        } catch (error) {
            res.send(error.message)
        }
    },
}  