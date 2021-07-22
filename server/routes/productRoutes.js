import express from 'express'
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/productController'
import { protect, isAdmin } from '../middleware/authMiddleware'

const Router = express.Router()

// api/products/
Router.route('/')
      .get(getProducts)
      .post(protect,isAdmin,createProduct)

Router.route('/:id')
      .get(getProductById)
      .delete(protect,isAdmin, deleteProduct)
      .put(protect,isAdmin, updateProduct)
