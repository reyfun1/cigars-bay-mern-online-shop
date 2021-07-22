import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'


// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async(req,res) => {

    console.log(req.body)
    // extract user info from request 
    const {name, email, password } = req.body

    // find if user already exists
    const userAlreadyExists = await User.findOne({email})

    if(userAlreadyExists){
        res.status(400)
        throw new Error('User already exists ')
    }

    // Create the user from the model
    const user = await User.create({
        name,
        email,
        password, // Encrypting is done automatically before saving
    })

    // return the created user 
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token : generateToken(user._id)
        })
    } else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

export {
    registerUser
}