import express from 'express'
const Router = express.Router()

import { protect, isAdmin} from '../middleware/authMiddleware.js'
import {createOrder, getAllOrders, getOrderById, getMyOrders, updateOrderToPaid, updateOrderToDelivered} from '../controllers/orderContorller.js'

Router.route('/')
      .post(protect, createOrder)
      .get(protect, isAdmin, getAllOrders)

Router.route('/:id')
      .get(protect, getOrderById)

Router.route('/:id/pay')
      .put(protect, updateOrderToPaid)

Router.route('/:id/delivered')
      .put(protect, isAdmin, updateOrderToDelivered)

Router.route('/myorders')
      .get(protect, getMyOrders)

export default Router;