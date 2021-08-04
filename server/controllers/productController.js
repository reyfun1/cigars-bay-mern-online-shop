import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async(req,res) => {
    //const products = await Product.find({})
    const products = {}
    res.json(products);
}) 

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    } else{
        res.status(404)
        throw new Error('Product not found')
    }
})

// @desc    Delete a single product 
// @route   DELETE /api/products/:id/
// @access  Private/Admin
const deleteProduct = asyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    } else{
        res.status(404)
        throw new Error('Productn ot found')
    }
})

// @desc    Create a product
// @route   POST /api/products/
// @access  Private/Admin
const createProduct = asyncHandler(async (req,res) => {
    // get the product info
    let productInfo = req.body

    // add the user to product info 
    productInfo['user'] = req.user._id

    const product = new Product(productInfo)

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)

})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async(req,res) => {

    const {name, price, description, image,brand,category,countInStock} = req.body

    const product = await Product.findById(req.params.id)

    if(product){
        product.name = name
        product.price = price
        product.name = name
        product.description = description
        product.image = image
        product.brand = brand
        product.category = category
        product.countInStock = countInStock
        
        const updatedProduct = await product.save()
        res.status(201).json(updatedProduct)

    } else{
        res.status(404)
        throw new Error('Product not found')
    }
})

export {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
}