import express from "express"
const router = express.Router()

import RouterWishlist from "./wishlist-routes"
import RouterClients from "./clients-routes"
import RouterProducts from "./products-routes"

router.use('/clients', RouterClients)
router.use('/products', RouterProducts)
router.use('/wishlist', RouterWishlist)

export default router