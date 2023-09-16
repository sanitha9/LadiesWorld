const express = require('express')

const app = express()
const mongoose = require ('mongoose');
const LadiesWorldRouter = require('./src/Router/LadiesWorldRouter');

// const LadiesWorldRouter = require('./src/Router/LadiesWorldRouter');
// const RegisterRouter = require('./src/Router/RegisterRouter');
// const LoginRouter = require('./src/Router/LoginRouter');
// const CheckAuth = require('./src/Middlewares/CheckAuth');
// const VerifyAccess = require('./src/Middlewares/VerifyAccess');
// const cors = require('cors');

// const Booksrouter = require('./src/Routes/Booksrouter');
// app.use(cors())
mongoose.connect("mongodb+srv://sanisandhya7:12345@cluster0.oclisoj.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Database connected");
}).catch((error)=>{
    console.log(error);
})
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/ecommerce',LadiesWorldRouter)

app.listen(5000,()=>{
    console.log('server started');
})