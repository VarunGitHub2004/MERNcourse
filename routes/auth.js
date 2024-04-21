import express from 'express'
import { createUser } from "../controller/auth.js"
export const authRouter=express.Router()
authRouter.post('/signup',createUser)
  