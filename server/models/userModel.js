import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

// Create the user schema 
const userSchema = mongoose.Schema({
    name : {type: String, required: true},
    email : {type: String, required: true, unique: true},
    password : {type: String, required: true},
    isAdmin : {type: Boolean, required: true, default: false},
}, {
    timestamps: true
})

// Add password comparation method the schema 
userSchema.methods.matchPasswords = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

// Encrypt the password everytime before saving 
userSchema.pre('save', async function(next){
    if(!this.isModified('password')) next()

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

// Create the model using the schema 
const User = mongoose.model('User', userSchema)

export default User

