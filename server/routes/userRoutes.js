import express from 'express'
import { protect, isAdmin } from '../middleware/authMiddleware.js'

// import controller metihods here
import { deleteUser, getUserById, getUserProfile, getUsers, loginUser, registerUser, updateUser, updateUserProfile } from '../controllers/userController.js'

const Router = express.Router()

// /api/users/
Router.route('/')
      .post(registerUser)
      .get(protect, isAdmin, getUsers)
Router.route('/login')
      .post(loginUser)

Router.route('/profile')
      .get(protect,getUserProfile)
      .put(protect, updateUserProfile)

Router.route('/:id')
      .delete(protect,isAdmin, deleteUser)
      .get(protect, isAdmin, getUserById)
      .put(protect,isAdmin, updateUser)

export default Router;