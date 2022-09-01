const express = require('express')
const app = express()
const PORT = 5000 // port number
const mongoose = require('mongoose')


// Connect to the MONGODB_URL
const {MONGODB_URL} = require('./keys')
mongoose.connect(MONGODB_URL)
mongoose.connection.on('connected', ()=>{
    console.log('Connected to Mongodb')
})
mongoose.connection.on('error', (error)=>{
    console.log('NOT connected to Mongodb ',error)
})

require('./Models/user') // import User Schema
require('./Models/post')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/feeds'))


app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})

