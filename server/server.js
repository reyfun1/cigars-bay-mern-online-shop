// Import Needed Packages
import express from 'express';
import dotenv from 'dotenv';

// Import src files 
import connectDB from './config/db.js'
import products from './data/products.js'
import { errorHandler, notFound } from './middleware/errorMiddleWare.js';

// Import route files 
import productRoutes from './router/prodctRoutes'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes'

// Start dotenv, connect db , declare app , port and accept json
dotenv.config()
connectDB()
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())


// Testing API 
app.get('/', (req,res) => {
    res.send('API is working')
})

// Routes
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/order', orderRoutes )


// Handle Errors Middlewaraes to handle errors 
app.use(notFound)
app.use(errorHandler)

// Start actual listening 
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))