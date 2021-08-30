import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const createOrder = asyncHandler(async(req,res) => {
    // get params from the body
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body

    // check if order has items and add
    if(orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error('No order items')
    } else{
        const order = new Order({
            user: req.user._id,
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })

        const createdOrder = await order.save()

        res.status(201).json(createdOrder)
    }
})

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async(req,res) => {
    // get orer id from the body, // get the usr name and email as welll
    const order = await Order.findById(req.params.id).populate('user','name email' )

    if(order){
        res.json(order)
    } else{
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async(req,res) => {
    // find order by id
    const order = await Order.findById(req.params.id)

    // if order exists, set the paid paramters
    if(order){
        order.isPaid = true
        order.paidAt = Date.now()
        
        // data incoming from paypal
        order.paymentResult = {
            id : req.body.id,
            status : req.body.status,
            update_time : req.body.update_time,
            email_address : req.body.payer.email_address
        }

        // save order
        const updateOrder = await order.save()
        res.json(updateOrder)

    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/delivered
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async(req,res) => {
    // find order by id 
    const order = await Order.find(req.params.id)

    // set delivered to true, and reply with the new order
    if(order){
        order.isDelivered = true
        order.deliveredAt = Date.now()

        const updatedOrder = await order.save()
        
        res.json(updatedOrder)
    } else{
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc    Get logged in user orders 
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async(req,res) => {
    const orders = await Order.find({user: req.user._id})
    res.json(orders)
})

// @desc    Get all of the orders 
// @route   GET /api/orders/
// @access  Private/Admin
const getAllOrders = asyncHandler(async(req,res) => {
    const orders = await Order.find().populate('user', 'id name')
    res.json(orders)
})

export {
    createOrder,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getMyOrders,
    getAllOrders
}