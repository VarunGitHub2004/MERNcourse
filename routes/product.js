import express from 'express'
import {createProduct,getAllProducts,getProduct,replaceProduct,updateProduct,deleteProduct, getAllProductsSSR, addProduct} from '../controller/product.js'

const productrouter = express.Router();

productrouter
  .post('/', createProduct)
  .get('/', getAllProducts)
  .get('/addProduct',addProduct)
  .get('/ssr',getAllProductsSSR)
  .get('/:id', getProduct)
  .put('/:id', replaceProduct)
  .patch('/:id', updateProduct)
  .delete('/:id', deleteProduct)


export default productrouter