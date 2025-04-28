import { Router } from 'express'
import { body } from 'express-validator'
import { createCategory } from '../controllers/categoryController.js'

const router = Router()
router.post(
  '/',
  body('categoryName').isString().notEmpty(),
  body('subcategories').isArray({ min: 1 }).custom(arr => arr.every(s => typeof s === 'string')),
  createCategory
)
export default router