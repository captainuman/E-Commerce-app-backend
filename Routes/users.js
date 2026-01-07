import express from 'express'
import {v4 as uuidv4} from 'uuid'

const router = express.Router()
let users = [
{
"username": "Numan",
"email": "mdnuman2611@gmail.com",
"mobile": "9123456780",
"dob": "2026-01-01",
"gender": "male",
"password": "N12345678",
"confirmPassword": "N12345678",
"adress": "gandhinagar tiptur"
}]

router.get('/' , (req,res)=>{
    res.send(users)
})

router.post('/' , (req,res)=>{
    const {username , email, mobile, dob, gender, password , confirmPassword , adress} = req.body
    console.log(req.body)
    users.push(req.body)

    res.status(201).json({
        message:"user registered successfully",
        data : {username , email, mobile, dob, gender, password , confirmPassword , adress}
    })
})


export default router