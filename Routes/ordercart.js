import express from 'express'

const router = express.Router()
let ordercart = [

]

router.get('/' , (req,res)=>{
    res.send(ordercart)
})

router.post('/' , (req,res)=>{
    const {name , price , quantity , id ,  companyname , description , brand , color , Material , About , Images , Discount ,size}  = req.body
    ordercart.push(req.body)
    res.status(201).json({
        message : 'item created ',
        data : {name , price , quantity , id , companyname , description , brand , color , Material , About, Images ,Discount , size} 
    })
})

export default router 
