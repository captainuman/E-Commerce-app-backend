import express from 'express'

const router = express.Router()
let orderdata = [
    
]

router.get('/' , (req,res)=>{
    res.send(orderdata)
})

router.post('/' , (req,res)=>{
    const {name , price , quantity , id ,  companyname , description , brand , color , Material , About , Images , Discount ,size}  = req.body
    orderdata.push(req.body)
    res.status(201).json({
        message : 'item created ',
        data : {name , price , quantity , id , companyname , description , brand , color , Material , About, Images ,Discount , size} 
    })
})

export default router 
