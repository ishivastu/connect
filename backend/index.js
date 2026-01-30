import express from 'express';
import dotenv from 'dotenv';
dotenv.config();// backend/index.js
import cors from 'cors'
app.use(cors())




const app=express();
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