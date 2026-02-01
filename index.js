const express = require('express')
require('dotenv').config()
const cors= require('cors')
const connect = require('./src/connnect/db')
const userRoutes  = require('./src/routers/useRoutes')
const app = express()

app.use(cors({
    origin : '*'
}))

app.use(express.json())
app.use('/api',userRoutes)
let isConnected = false

try {
    connect()
    isConnected= true
} catch (error) {
    console.log(error);
}
app.use((req,res,next)=>{
    if(!isConnected){
        connect()
    }
    next()
})

// try {
//     app.listen(process.env.PORT,()=>{     
//     })
// } catch (error) {
//  console.log(error);    
// }


module.exports =app 