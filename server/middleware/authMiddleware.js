import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// Middleware to protect routes 
// Get token from request, decode and compare to the 
const protect = asyncHandler(async(req,res,next) => {
    let token 

    // if there is a token in the headers and it starts with Bearer
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

        try{
            // get token from header
            token = req.headers.authorization.split(' ')[1]

            // decode the token to ge the id of the user
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // fetch the uses data by the id expect the password
            // req.user will be avaible for access in all of the protected routes
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch(error) {
            console.error(error)
            res.status(401)
            throw new Error('Not Authorized, failed token')
        }
    }

    // Token not present
    if(!token){
        res.status(401)
        throw new Error('Not Authorized, no token')
    }
})

// Method to check if user is an Admin 
const isAdmin = (req,res,next) => {
    if(req.user && req.user.isAdmin){
        next();
    } else{
        res.status(401)
        throw new Error('Not authorized, ADMIN ONLY')
    }
}

export {protect, isAdmin}