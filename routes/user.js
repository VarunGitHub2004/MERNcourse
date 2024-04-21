import express from 'express'
import {getAllUsers,getUser,replaceUser,updateUser,deleteUser} from '../controller/user.js'
import dotenv from 'dotenv'
dotenv.config()
const userrouter = express.Router();
console.log("Hello")
userrouter
  .get('/', getAllUsers)
  .get('/:id', getUser)
  .put('/:id', replaceUser)
  .patch('/:id', updateUser)
  .delete('/:id', deleteUser);

export default userrouter