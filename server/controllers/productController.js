import asyncHandler from 'express-async-handler'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async(req,res) => {
    //const products = await Product.find({})
    const products = {}
    res.json(products);
}) 

export {
    getProducts,
    // getProductById,
    // deleteProduct,
    // createProduct,
    // updateProduct,
}