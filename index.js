import express from 'express'
import cors from 'cors'
import userdata from './Routes/users.js'
import data from './Routes/cartdata.js'
import orderdata from './Routes/orders.js'
import cartdata from './Routes/ordercart.js'

const app = express()
const PORT = 5000



app.use(express.json())
app.use(cors())
app.use('/users' , userdata)
app.use('/data' , data)
app.use('/orders' , orderdata)
app.use('/cart' , cartdata)

app.get('/' , (req,res)=>res.send('hello'))

app.listen(PORT , ()=>{
    console.log(`server running on port : http://localhost:${PORT}`)
})