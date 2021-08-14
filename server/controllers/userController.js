import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'


// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async(req,res) => {

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

// @desc    Register a new user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async(req,res) => {

    const { email,password } = req.body

    // find the user
    const user = await User.findOne({email})

    // if the user exists and if the password matches using the method from the user 
    if(user && await user.matchPasswords(password)){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            createdAt : user.createdAt,
            token: generateToken(user._id)
        })
    } else{
        // the user email is either not found or the password was invalid
        res.status(401)
        throw new Error('Invalid email or Password')
    }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async(req,res) => {

    // find the user in the database using the id
    const user = await User.findById(user._id)

    // if user is found return it, else throw error
    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin : user.isAdmin,
        })
    }
    else{
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async(req,res) => {
    // find the user in the db 
    const user = await User.findById(req.params._id)

    // if user id found , then change the properties of the user 
    if(user){
        user.name = req.body.name || user.name
        user.email = req.bosy.email || user.email
        if(req.bosy.password) user.password = req.body.password

        // save the updated params on the databse and return the new data 
        const updatedUser = await user.save()
        res.json({
            _id : updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin : updatedUser.isAdmin,
            token: generateToken(updatedUser._id)
        })
    } else{
        res.status(404)
        throw new Error('User not found')
    }
}) 

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler( async(req,res) => {
    const users = await User.find({})
    res.json(users)
})

// @desc    Delete a user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async(req,res) => {
    // find the user in the database
    const user = await User.findById(req.params.id)

    if(user){
        await user.remove()
        res.json({message : 'User removed'})
    } else{
        res.status(404)
        throw new Error('User not found')
    }

})

// @desc    Get a user by id
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async(req,res) => {
    // find user in the db, except passwords
    const user = await User.findById(req.params.id).select('-password')
    
    if(user){
        res.json(user)
    } else{
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async(req,res) => {
    // find the user in the db 
    const user = await User.findById(req.params.id)

    // if user is ofund then change he properties of the user 
    if(user){
        user.name = req.body.name || user.name,
        user.email = req.body.email || user.email,
        user.isAdmin = req.body.isAdmin === undefined ? user.isAdmin : req.body.isAdmin
    

    //save th eupdated params on the user and return it 
    const updatedUser = user.save()
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
        })
    // user is not found  
    } else{
        res.status(404)
        throw new Error('User not Found')
    }
})


export {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
}