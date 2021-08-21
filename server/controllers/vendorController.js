import asyncHandler from 'express-async-handler'

import Vendor from '../models/vendorModel.js'

// @desc    Fetch single vendor
// @route   GET /api/vendor/:id
// @access  Public
const getVendorById = asyncHandler(async(req,res) => {
    const vendor = await Vendor.findById(req.params.id)

    if(vendor){
        res.json(vendor)
    } else{
        res.status(404)
        throw new Error('Vendor not found')
    }
})

// @desc    Fetch single vendor
// @route   GET /api/vendor/
// @access  Public
const getVendors = asyncHandler(async(req,res) => {
    const vendors = await Vendor.find({})
    res.json(vendors)
})
export {
    getVendorById,
    getVendors
}