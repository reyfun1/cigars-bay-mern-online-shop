// Import Needed Packages
import express from 'express';
import dotenv from 'dotenv';

// Import src files 
import connectDB from './config/db.js'
import products from './data/products.js'
import { errorHandler, notFound } from './middleware/errorMiddleWare.js';


// Import route files 
import productRoutes from './routes/orderRoutes.js'

// Start dotenv, connect db , declare app and port
dotenv.config()
connectDB()
const app = express();
const PORT = process.env.PORT || 5000;


// Testing API 
app.get('/', (req,res) => {
    res.send('API is working')
})

// Routes
app.use('/api/products', productRoutes)
// app.use('/api/', userRoutes)
// app.use('/api/', orderRoutes)
// app.use('/api/', uploadRoutes)
// app.use('/api/', )
// app.use('/api/', )


// Handle Errors Middlewaraes to handle errors 
app.use(notFound)
app.use(errorHandler)

// Start actual listening 
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
