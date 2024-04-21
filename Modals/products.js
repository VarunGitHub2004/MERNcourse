import mongoose from "mongoose";
import { Schema } from "mongoose";

//Creating Schema
const productSchema=new Schema({
    title:{type:String,required:[true,"Why not title!"]},
    description:String,
    price:{
        type:Number,
        required:true,
        min:[0,'wrong price']
    },
    discountPercentage:{
        type:Number,
        min:[0,'wrong min discount'],
        max:[50,'wrong max discount']
    },
    rating:
    {
        type:Number,
        min:[0,'wrong minimum rating'],
        max:[5,'wrong maximum rating'],
    },

    brand:{type:String,
        required:[true,
        "Why not brand!"
    ]
}
    ,
    category:{type:String,required:true},
    thumbnail:{type:String,required:true},
    images:[String],//Array of String
})


//Creating Model
const Product=mongoose.model('Product',productSchema)

export {Product}