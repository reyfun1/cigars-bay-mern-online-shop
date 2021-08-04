import mongoose from 'mongoose'

// Create the product Schema 
const productSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    productIdCode: {type: String, required: true},
    brandName: {type: String, required: true},
    productIdCode: {type: String, required: true},
    vitolaName: {type: String, required: true},
    category: {type: String, required: true},
    cigarCount: {type: Number, required: true},
    strength: {type: String, required: true},
    wrapper: {type: String, required: true},
    cigarRingSize: {type: Number, required: true},
    cigarLengthSize: {type: Number, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    countInStock: {type: Number, required: true},
    weight: {type: Number, required: true},
    width: {type: Number, required: true},
    height: {type: Number, required: true},
    depth: {type: String, required: true},
    tags: {type: String, required: true},
    image: {type: String, require: true}
    },
    {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product