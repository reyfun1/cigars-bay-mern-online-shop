import mongoose from 'mongoose'

const messageSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: {type: String, required : true},
    email : {type: String, required: true},
    subject : {type: String},
    orderRef : {type: String},
    msg : {type: String, required: true},
}, {
    timestamps: true
})

const Message = mongoose.model('Message', messageSchema)

export default Message
