import express from "express"
const router = express.Router()

import RouterWishlist from "./wishlist-routes"

router.use('/wishlist', RouterWishlist)


export default router