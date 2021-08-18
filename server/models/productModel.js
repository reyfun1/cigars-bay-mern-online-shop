import mongoose from 'mongoose'
//Create the sku schema 
const skuSchema = mongoose.Schema({
    sku : {
        type : String,
        required: true,
    },
    isSearchable: {
        type: Boolean,
        default: false,
    },
    price : {
        base: {
            type: Number,
        },
        discount : {
            type: Number,
        }
    },
    stock_qty: {
        type: Number,
        required: true
    },
    shipping: {
        h: {type: Number},
        l : {type: Number},
        w : {type: Number},
        weight: {type: Number}
    },
    option: {
        type: String
    }
})


// Create the product Schema 
const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Vendor',
    }, 
    category: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Category'
        }
    ],
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    attributes: {
        type : Object,
    },
    skus: [skuSchema],
    tags: [String],
    images : [String],

}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product