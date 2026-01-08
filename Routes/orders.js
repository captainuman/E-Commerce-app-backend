import express from 'express'

const router = express.Router()
let orderdata = [
{
"id": "MOB-1003",
"name": "OnePlus Nord CE 3",
"price": 24999,
"quantity": 1,
"companyname": "OnePlus India",
"brand": "OnePlus",
"description": "Mid-range smartphone offering clean UI, fast charging, AMOLED display, solid performance and sleek design.",
"color": "Aqua Surge",
"material": "Plastic & Glass",
"about": [
"Clean OxygenOS",
"Fast charging",
"AMOLED display",
"5G support",
"Lightweight",
"Good camera",
"Smooth UI",
"Reliable battery",
"Good thermals",
"Value for money"
],
"images": [
"https://images.unsplash.com/photo-1605236453806-6ff36851218e",
"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
"https://images.unsplash.com/photo-1580910051074-3eb694886505",
"https://images.unsplash.com/photo-1598327105666-5b89351aff97",
"https://images.unsplash.com/photo-1616348436168-de43ad0db179"
],
"discount": 15,
"size": {
"ram": "8GB",
"storage": "128GB"
},
"categories": [
"Mobile Phones",
"Mid Range",
"5G"
]
},
{
"id": "MOB-1003",
"name": "OnePlus Nord CE 3",
"price": 24999,
"quantity": 1,
"companyname": "OnePlus India",
"brand": "OnePlus",
"description": "Mid-range smartphone offering clean UI, fast charging, AMOLED display, solid performance and sleek design.",
"color": "Aqua Surge",
"material": "Plastic & Glass",
"about": [
"Clean OxygenOS",
"Fast charging",
"AMOLED display",
"5G support",
"Lightweight",
"Good camera",
"Smooth UI",
"Reliable battery",
"Good thermals",
"Value for money"
],
"images": [
"https://images.unsplash.com/photo-1605236453806-6ff36851218e",
"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
"https://images.unsplash.com/photo-1580910051074-3eb694886505",
"https://images.unsplash.com/photo-1598327105666-5b89351aff97",
"https://images.unsplash.com/photo-1616348436168-de43ad0db179"
],
"discount": 15,
"size": {
"ram": "8GB",
"storage": "128GB"
},
"categories": [
"Mobile Phones",
"Mid Range",
"5G"
]
}
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
