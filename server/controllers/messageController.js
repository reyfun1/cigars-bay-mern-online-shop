import asyncHandler from 'express-async-handler'
import Message from '../models/messageModel.js'

// @desc    Fetch single vendor
// @route   POST /api/msg/
// @access  Public
const saveMessage = asyncHandler(async(req,res) => {
    // get params from the body
    const {
        name,
        email,
        subject,
        orderRef,
        msg
    } = req.body

    if(name && email && msg){
        const message = new Message({
            name,
            email,
            subject,
            orderRef,
            msg
        })
    
        const createdMsg = await message.save()
        res.status(201).json(createdMsg)
    } else{
        
    }
})

export {
    saveMessage
}