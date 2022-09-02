const express = require('express')
const app = express()
const PORT = 5000 // port number
const mongoose = require('mongoose')
var cors = require('cors')

// Connect to the MONGODB_URL
const {MONGODB_URL} = require('./keys')
mongoose.connect(MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', ()=>{
    console.log('Connected to Mongodb')
})
mongoose.connection.on('error', (error)=>{
    console.log('NOT connected to Mongodb ',error)
})
// import Schema
require('./Models/user') 
require('./Models/post')
app.use(express.json())
app.use(cors({
    origin: '*'
}));
app.use(require('./routes/auth'))
app.use(require('./routes/feeds'))


app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})

