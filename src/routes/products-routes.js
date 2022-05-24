import express from "express";
import ProductController from "../controllers/products-controller";

const router = express.Router()

const productController = new ProductController()

router.get('/', (req, res) => productController.findAll(req, res))

router.get('/:code', (req, res) => productController.find(req, res))

router.post('/', (req, res, next) => {
    productController.create(req.body, res)
})

router.patch('/:id', (req, res, next) => productController.update(req, res) )

router.delete('/:id', (req, res, next) => productController.delete(req, res) )

export default router