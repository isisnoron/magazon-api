import express from "express"
const router = express.Router()

import RouterWishlist from "./wishlist-routes"
import RouterProdutos from "./products-routes"

router.use('/produtos', RouterProdutos)
router.use('/wishlist', RouterWishlist)

export default router