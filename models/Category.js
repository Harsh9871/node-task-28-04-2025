import mongoose from 'mongoose'
const schema = new mongoose.Schema({
  categoryName: { type: String, required: true, unique: true },
  subcategories: { type: [String], required: true }
})
export default mongoose.model('Category', schema)