const express=require('express');

const app=express();
app.use(express.json());
const connectDB=require('./DB/db');
const cookieParser=require('cookie-parser');
const authRoutes=require('./routes/auth.route');

connectDB();

app.use(cookieParser());


app.use('/api/auth',authRoutes);


module.exports=app; 

