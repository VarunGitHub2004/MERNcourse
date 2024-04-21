import mongoose, { Schema } from "mongoose";
//Doubt
// var validateEmail=function(email){
//     var re= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     return re.test(email)
// // }
// const addressSchema=new Schema(
//     {
//         pincode:{
//             type:Number,
//             required:true,
//         },
//         street:{
//             type:String,
//             required:true,
//         },
//         phone:{
//             type:Number,
//             min:10,
//             max:10,
//             length:10,
//             required:true,
//         }
//     }
// )
// const userSchema=new Schema({
//     firstName:{
//         type:String,
//         maxLength:16
//     },
//     lastName:{
//         type:String,
//         maxLength:16
//     },
//     age:{
//         type:Number,
//         min:12,
//         max:100
//     },
//     email:{
//         type:String,
//         // validate:[validateEmail,"Plz fill a valid email address"],
//         match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
//     },
//     address:addressSchema
// })


const userSchema=new Schema({
    firstName:{type:String,required:true},
    lastName:String,
    email:{
        type:String,
        unique:true,
        validate:{
            validator: function(v){
                return  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v)
            }
        }
    },
    password:{type:String,minLength:6,required:true},
    token:String
})
const User=mongoose.model('User',userSchema)
export default User