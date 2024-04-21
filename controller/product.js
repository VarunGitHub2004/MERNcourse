//Note remember the old rest api crud operations for interview
import { Product } from "../Modals/products.js";
import ejs from 'ejs'
import path from "path"
//Mongoose CRUD OPERATIONS
const __dirname = import.meta.dirname;
export const getAllProductsSSR=async(req,res)=>{
  const products=await Product.find()
   ejs.renderFile(path.resolve(__dirname,'../pages/index.ejs'),{products:products},(err,str)=>{
    res.send(str)
   })
 }

 export const addProduct=async(req,res)=>{
  console.log("Adding product")
  ejs.renderFile(path.resolve(__dirname,"../pages/addProduct.ejs"),(err,str)=>{
    res.send(str)
  })
 }
export const createProduct = (req, res) => {
  const product = new Product(req.body);
  console.log("Creating");
  product
    .save()
    .then((doc) => {
      console.log(doc);
      res.status(201).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err.errors.brand.message);
    });
};



export const getAllProducts = async (req, res) => {

  const products = await Product.find();
  res.send(products);
};

export const getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};
export const replaceProduct = async (req, res) => {
  const id = req.params.id;
  const replacedProduct = await Product.findOneAndReplace(
    { _id: id },
    req.body,
    { new: true }
  );
  res.status(201).json(replacedProduct);
};
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const updatedProduct = await Product.findOneAndUpdate({ _id: id }, req.body, {
    upsert: true,
    new: true,
  });
  await Product.findByIdAndUpdate(id, req.body);
  res.status(201).json(updatedProduct);
};
export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const deletedProduct = await Product.findByIdAndDelete(id,{new:true});
  res.status(201).json(deletedProduct);
};
