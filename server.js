import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import errorHandler from './middleware/errorHandler.js'

dotenv.config()
mongoose.connect(process.env.MONGO_URI)

const app = express()

app.use(express.json())

app.use('/api/v1/categories', categoryRoutes)
app.use('/api/v1/products', productRoutes)

app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
