import mongoose from 'mongoose'

const vendorSchema = mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    description : {
        type: String,
        required: true
    }
}, {
    timestamp: true
})

const Vendor = mongoose.model('Vendor', vendorSchema)

export default Vendor