import express from 'express';
import WishlistController from '../controllers/wishlist-controller'

const router = express.Router()
const wishlistController = new WishlistController()

router.get('/client/id/:_id', (req, res) => wishlistController.searchWishlistByClientId(req, res))

router.get('/products/id/:_id', (req, res) => wishlistController.searchWishlistByProductId(req, res))

router.put('/:id', (req, res) => wishlistController.updateWishlist(req, res) )

router.delete('/:id', (req, res, next) => wishlistController.removeWishlist(req, res) )

router.get('/:_id', (req, res) => wishlistController.searchWishlistsId(req, res))

router.get('/', (req, res) => wishlistController.searchWishlist(req, res))

router.post('/', (req, res) => {
    wishlistController.registerWishlist(req.body, res)
})

export default router
