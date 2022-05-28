import express from "express"
import RouterProducts from "./products-routes"
import RouterClients from "./clients-routes"

const router = express.Router()


router.use('/clients', RouterClients)
router.use('/products', RouterProducts)

export default router