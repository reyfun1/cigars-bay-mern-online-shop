import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async(req,res) => {
    const pageSize = 10
    const page = Number(req.query.pageNumber) || 1

    // if keyword is sent make regex
    const keyword = req.query.keyword 
        ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        } : {}
    
    // get total count of documents matching the keyword
    const count = await Product.countDocuments({ ...keyword })
    
    // return the products depending on keyword match and the page number
    const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page - 1))
    
    // return info
    res.json({ products, page, pages: Math.ceil(count / pageSize) })
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
    // productInfo['user'] = req.user._id
    productInfo['user'] = '60fbbb963442c32b60fc671e'
    productInfo['vendor'] = '611caaebda2b43aa1906cfc5'
    productInfo['category'] = '611cab2fda2b43aa1906cfc6'

    // console.log(productInfo)

    const product = new Product(productInfo)

    // console.log(product)

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