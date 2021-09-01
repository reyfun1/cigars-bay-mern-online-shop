import express from 'express'
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct, getProductsByTag } from '../controllers/productController.js'
import { protect, isAdmin } from '../middleware/authMiddleware.js'

const Router = express.Router()

// api/products/
Router.route('/')
      .get(getProducts)
      .post(protect,isAdmin,createProduct)

Router.route('/tags/:tag')
      .get(getProductsByTag)

Router.route('/:id')
      .get(getProductById)
      .delete(protect,isAdmin, deleteProduct)
      .put(protect,isAdmin, updateProduct)

export default Router;