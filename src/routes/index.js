import express from "express"
import RouterProducts from "./products-routes"
// import RouterClients from "./clients-routes"

const router = express.Router()

// router.use('/teste', (req, res, next) => res.send('Hello world'))

// router.use('/clients', RouterClients)
router.use('/products', RouterProducts)

export default router