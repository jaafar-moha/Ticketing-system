const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const userRoute = require('./routes/userRoutes')


// config app
const app = express()

//Midllewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.use(
    cors({
      origin: 'http://localhost:3001',
      credentials: true,
    })
);

// connected DB
const url=process.env.db
mongoose.connect(url,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex:true 
    
}).then(()=>console.log('mongodb is connected'))
.catch((err)=>console.log(message.error))

app.use('/api',userRoute)


app.listen(3000, () => console.log('server running on port 3000'))

