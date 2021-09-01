// Import Needed Packages
import express from 'express';
import dotenv from 'dotenv';
import path from 'path'

// Import src files 
import connectDB from './config/db.js'
import { errorHandler, notFound } from './middleware/errorMiddleWare.js';

// Import route files 
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import vendorRoutes from './routes/vendorRoutes.js'
import messageRoutes from './routes/messageRoutes.js'

// Start dotenv, connect db , declare app , port and accept json
dotenv.config()
connectDB()
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())

// Routes
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/order', orderRoutes )
app.use('/api/upload', uploadRoutes)
app.use('/api/vendors', vendorRoutes)
app.use('/api/msg',messageRoutes)


// TODO : Configure PpayPal 

// make path accessible
const __dirname = path.resolve()

// make the upload folder accessible from the front end 
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// if app is running on 'production'
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/client/build')))

    // **any route that is not one of the other ones redirect to index.html
    app.get("*", (req,res)=> res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))

} else{
    app.get('/', (req,res) => {
        res.send('Api is running...')
    })
}




// Handle Errors Middlewaraes to handle errors 
app.use(notFound)
app.use(errorHandler)

// Start actual listening 
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
