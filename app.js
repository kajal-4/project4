const express=require('express');
const morgan=require('morgan');
const cors=require('cors');

PORT=3008;
require('./db/connection')
const loginRoute =require('./Routes/loginRoute')
const app=express();
app.use(morgan('dev'));
app.use(cors());





// Middleware to parse JSON request body
app.use(express.json());

// Middleware to parse URL-encoded request body (if you're sending data like form data)
app.use(express.urlencoded({ extended: true }));

// Your routes and other middleware
app.use('/api',loginRoute );


app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`)
})











