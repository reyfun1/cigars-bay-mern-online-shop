import express from 'express'
import { protect, isAdmin } from '../middleware/authMiddleware.js'

// import controller metihods here
import { registerUser } from '../controllers/userController.js'

const Router = express.Router()

// /api/users/
Router.route('/')
      .post(registerUser)

export default Router;