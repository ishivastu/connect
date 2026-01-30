import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors'

dotenv.config();// backend/index.js

const app=express();
app.use(cors())
const PORT=process.env.PORT;

app.get('/api/health',(req,res)=>{
    res.json({
        name:"shivastu",
        status:"not heathy",
        age:22
    });

});

app.listen(PORT,()=>{
    console.log('Server is running on port',PORT);
})