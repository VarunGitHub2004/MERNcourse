import ProductsDB from '../data/data.json'
import {  BiSolidHeart } from 'react-icons/bi'
import React, { useState } from 'react'
import axios from 'axios'
import { IconContext } from 'react-icons'

const Card = () => {
const [Products,setProducts]=useState(ProductsDB)
const [heartColor,setHeartColor]=useState('')
const handleFill=async (id)=>{
  console.log(id)
            const newProducts= Products.filter(product=>product._id!==id)
            setProducts(newProducts)
            await axios.delete(`http://localhost:5000/products/${id}`)
            console.log("Deleted!");
}
console.log(Products)
  return (
    <div className="grid grid-cols-1 gap-4">
      <IconContext.Provider value={{color:"white"}}>  
    {
      Products.map(product=>(
<div className="max-w-sm lg:max-w-sm lg:flex shadow-md shadow-black">
  <div>
  <div
    className="h-48 lg:h-full p-1 bg-black  justify-end flex lg:w-48 flex-none bg-contain bg-no-repeat rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    style={{ backgroundImage: product.thumbnail}}
    title="Woman holding a mug"
  ><span className=" cursor-pointer mt-2 border-black border-solid border-1 rounded-full"><BiSolidHeart border color={heartColor} onClick={()=>handleFill(product._id)} size={25}/></span></div>
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <div className="text-gray-900 font-bold text-xl mb-2">
      {product.title}
      </div>
      <p className="text-gray-700 text-base">
     {product.description}
      </p>
      <p className="text-gray-700 text-lg">
     ${product.price}
      </p>
    </div>
    <div className="flex items-center">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src={product.thumbnail}
        alt="Avatar of Jonathan Reinink"
      />
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
        <p className="text-gray-600">Aug 18</p>
      </div>
    </div>
  </div>
</div>
      ))
}
</IconContext.Provider>

  </div>
  )
}

export default Card