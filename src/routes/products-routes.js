import express from "express";
import ProductController from "../controllers/products-controller";

const router = express.Router()

const productController = new ProductController()

router.get('/', (req, res) => productController.findAll(req, res))

router.get('/:id', (req, res) => productController.find(req, res))

router.post('/', (req, res, next) => {
    productController.create(req.body, res)
})

export default router