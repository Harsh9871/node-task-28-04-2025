import Product from '../models/Product.js'
import Category from '../models/Category.js'
import { validationResult } from 'express-validator'

export const createProduct = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
  try {
    const { title, categoryId, subCategory } = req.body
    const cat = await Category.findById(categoryId)
    if (!cat || !cat.subcategories.includes(subCategory)) {
      return res.status(400).json({ message: 'Invalid category or subcategory' })
    }
    const product = await Product.create({ title, category: categoryId, subCategory })
    res.status(201).json(product)
  } catch (err) {
    next(err)
  }
}

export const getProduct = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
  try {
    const p = await Product.findById(req.params.id).populate('category', 'categoryName')
    if (!p) return res.status(404).json({ message: 'Not found' })
    res.json({
      id: p._id,
      title: p.title,
      category: p.category.categoryName,
      subCategory: p.subCategory
    })
  } catch (err) {
    next(err)
  }
}