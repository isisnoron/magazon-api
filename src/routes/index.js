import express from "express"
import RouterProdutos from "./products-routes"
import RouterClients from "./clients-routes"
import RouterWishlist from "./wishlist-routes"

const router = express.Router()

router.use('/produtos', RouterProdutos)
router.use('/clients', RouterClients)
router.use('/wishlist', RouterWishlist)

export default router