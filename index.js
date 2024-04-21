import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose';

import morgan from 'morgan';
import productRouter from './routes/product.js';
import cors from "cors"
import path from 'path'

const server = express();
import jwt from 'jsonwebtoken'
server.use(cors())
server.use(express.urlencoded()) //For using middlewares at path
import userRouter from './routes/user.js'
import { authRouter } from './routes/auth.js';
console.log('env',process.env.DB_PASSWORD)

const auth=(req,res,next)=>{
  const token=req.get("Authorization").split("Bearer ")[1]
  console.log(token)
  try{
    const decoded=jwt.verify(token,process.env.SECRET_KEY)
    console.log(decoded)
    if(decoded.email)
    next()
  else
  res.sendStatus(401)
  }
catch(err)
{
  res.sendStatus(401)
}
}
dotenv.config() 
//db connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected')
}
//Schema
//bodyParser
server.use('*',(req,res)=>{
  res.sendFile(path.resolve())
})

server.use(express.json());
server.use(morgan('default'));
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products',auth,productRouter);
server.use('/users',auth,userRouter); //Applying middleware at router for authorization
server.use('/auth',authRouter)

server.listen(process.env.PORT || 5000, () => {
  console.log('server started');
})