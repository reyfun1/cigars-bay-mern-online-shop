import express from 'express'
const Router = express.Router()

// Import controller methods here
import { getProducts } from '../controllers/productController.js'

// Routes after /api/products
Router
    .route('/')
    .get(getProducts)

export default Router