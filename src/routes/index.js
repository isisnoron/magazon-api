import express from "express"
// import RouterProdutos from "./products-routes"
import RouterClients from "./clients-routes"
import RouterProdutos from "./products-routes"
// import RouterClients from "./clients-routes"

const router = express.Router()

// router.use('/teste', (req, res, next) => res.send('Hello world'))

router.use('/clients', RouterClients)
// router.use('/products', RouterProdutos)
// router.use('/clients', RouterClients)
router.use('/produtos', RouterProdutos)

export default router