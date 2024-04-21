import axios from "axios"
import { useState } from "react"
const initialState={
 title:"Realme 11",
 description:"A decent phone with decent quality camera",
 price:"15999",
 discountPercentage:"20",
 rating:"4.3",
 stock:"500",
 brand:"Realme",
 category:"Mobile Phones",
 thumbnail:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMVFRUXFxUXFxUYFRUXFRUYFxgWFxcYFRcYHikhGBsmHBUVIjIiJiosLy8vFyA0OTQuOCkuLywBCgoKDg0OHBAQGy4mICYuLi4uLC4uLi4uLi4uLC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcCAQj/xABOEAABAwICBAYMCgcJAAMAAAABAAIDBBEFIQYSMUFRYXFysbIHExQiMjM0QlJzgZIVIyRTVHSRocHRF2Jkk7PS8BYlNWOCosLT4UOUo//EABoBAQADAQEBAAAAAAAAAAAAAAACAwQBBQb/xAAzEQACAQIDBgQGAgIDAQAAAAAAAQIDERIhMQRBUXGx8DJhgdEFEyKRofEz4ULBI1KSFP/aAAwDAQACEQMRAD8A7iiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKNVVkcdu2Pa0nYCQCeQbT7FIJVfQsswPOb39852/POw4hsA4lGTsdSM/whH6R9135J8IR+kfdd+S89sK+GQ8KjiZKyPXwjF6X3O/JPhGL0vud+SiVmIsibrSSBg4SdvINp5AtRxrsiU7A+NrKl77EXbFqhpPPLTwbAuOcrNpXOqKubx8Ixel9zvyX34Ri9L7nfkubYf2UqZpImZUsubhxa1wAsBY2cTu4Ft+D6SU9ULwTtfxXs4crTminLeg4rcXfd8fpj71hlxmnabOmY08BcAfsKi11YY43ybdRjnW4dVpNvuXKKrDBV9pnqXyP14mP1NdzRdw1iTqkHadgsrIKc5WViEsMVdnYPhum+fj98J8OU3z8fvBcuptFqI7Yf8A9Jv51Kj0ToGyMLoLxuOo742cBrnHvHeHsJ73lc3jVrpSXf8AZ"
}
const AddProduct = () => {
    const [product,setProduct]=useState(initialState)
    const handleChange=(e)=>{
          setProduct({product,[e.target.name]:[e.target.value]})
    }
    
    const handleSubmit=async (e)=>{
         console.log(product)
         e.preventDefault()
         try{
         await axios.post("http://localhost:5000/products",product)}
         catch(err){
             console.log("error",err.message)
         }
    }
  return (
        <form onSubmit={handleSubmit} className="bg-slate-900 h-screen text-white justify-center items-center flex flex-col gap-4 p-2">
 <input className="p-2 w-1/2 font-bold text-black"  type="text" name="title" placeholder="title" value={product.title} onChange={handleChange} />
       <input value={product.description} className="p-2 w-1/2 font-bold text-black" type="text" placeholder="description" name="description" onChange={handleChange} />
      <input value={product.price} className="p-2 w-1/2 font-bold text-black" type="number" name="price" placeholder="price" onChange={handleChange} />
 <input className="p-2 w-1/2 font-bold text-black" name="discountPercentage" value={product.discountPercentage} placeholder="discountPercentage" type="text" onChange={handleChange} /> 
     <input className="p-2 w-1/2 font-bold text-black" type="number" name="rating" placeholder="rating" value={product.rating} onChange={handleChange} />
     <input className="p-2 w-1/2 font-bold text-black" type="number" name="stock" value={product.stock} placeholder="stock" onChange={handleChange} />
<input className="p-2 w-1/2 font-bold text-black" type="text" name="brand" placeholder="brand" value={product.brand} onChange={handleChange} />
         <input className="p-2 w-1/2 font-bold text-black" type="text" name="category" placeholder="category" value={product.category} onChange={handleChange} />
     <input className="p-2 w-1/2 font-bold text-black" type="text" name="thumbnail" placeholder="thumbnail" value={product.thumbnail} onChange={handleChange} />
      <button className="bg-blue-700 text-white  w-1/2 p-2" type="submit">Submit</button>
        </form>
  )
}

export default AddProduct