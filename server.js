const express = require('express')
const app = express()
const PORT = 5000 // port number
const mongoose = require('mongoose')
var cors = require('cors')
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

// Connect to the MONGODB_URL
const {MONGODB_URL,C_APIKEY,C_APISEC,C_NAME} = require('./keys')


cloudinary.config({
    cloud_name: C_NAME,
    api_key: C_APIKEY,
    api_secret: C_APISEC,
  });
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "DEV",
    },
});

const upload = multer({ storage });

app.post("/createphoto", upload.single("picture"), async (req, res) => {
    return res.json({ picture: req});
});

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

