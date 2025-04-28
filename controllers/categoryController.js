import Category from '../models/Category.js'
import { validationResult } from 'express-validator'

export const createCategory = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
  try {
    const category = await Category.create(req.body)
    res.status(201).json(category)
  } catch (err) {
    next(err)
  }
}