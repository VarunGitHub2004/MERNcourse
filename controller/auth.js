import User from "../Modals/users.js";
import jwt from 'jsonwebtoken'
export const createUser = (req, res) => {
  const newUser=new User(req.body)
  const token =jwt.sign({email:req.body.email},process.env.SECRET_KEY)
  newUser.token=token
  newUser.save().then(result=>
    {
      console.log("A new User!")
      res.status(201).send(result)
    })
    .catch(err=>{
      console.log(err)
      res.status(401).send(err)
    })
};
