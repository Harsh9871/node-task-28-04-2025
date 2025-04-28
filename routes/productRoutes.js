import { Router } from 'express'
import { body, param } from 'express-validator'
import { createProduct, getProduct } from '../controllers/productController.js'

const router = Router()
router.post(
  '/',
  body('title').isString().notEmpty(),
  body('categoryId').isMongoId(),
  body('subCategory').isString().notEmpty(),
  createProduct
)
router.get(
  '/:id',
  param('id').isMongoId(),
  getProduct
)
export default router