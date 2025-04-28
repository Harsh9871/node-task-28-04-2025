import mongoose from 'mongoose'
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  subCategory: { type: String, required: true }
})
export default mongoose.model('Product', schema)