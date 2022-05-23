import express from 'express';
import WishlistController from '../controllers/wishlist-controller'

const router = express.Router()
const wishlistController = new WishlistController()

// <ok> listar todos os Wishlists do banco
router.get('/', (req, res, next) => {
    wishlistController.searchWishlistId()
    .then(wishlists => res.status(200).send(wishlists))
    .catch(next)
})

// <ok> buscar um Wishlist pelo identificador
router.get('/:_id', (req, res) => {
    wishlistController.searchWishlistId(req.params._id)
    .then(wishlist => res.status(200).send(wishlist))
})

// <ok> buscar um Wishlist pelo id do cliente
router.get('/client/id/:_id', (req, res, next) => {
    wishlistController.searchWishlistByClientId(req.params._id)
    .then(wishlists => res.status(200).send(wishlists))
    .catch(next)
    console.log('routes', req.params)
})

// <ok> buscar uma Wishlist pelo id de um produto
router.get('/products/id/:_id', (req, res, next) => {
    wishlistController.searchWishlistByProductId(req.params._id)
    .then(wishlists => res.status(200).send(wishlists))
    .catch(next)
})

// <ok> cadastrar novo Wishlist
router.post('/', (req, res, next) => {
    wishlistController.registerWishlist(req.body)
    .then(wishlist => res.status(200).send(wishlist))
    .catch(next)
})

// <rever> atualizar Wishlist
router.put('/:_id', (req, res, next) => {
    wishlistController.updateWishlist(req.params._id, req.body)
    .then(wishlist => res.status(200).send(wishlist))
    .catch(next)
})

// <ok> remover Wishlist
router.delete('/:_id', (req, res, next) => {
    wishlistController.removeWishlist(req.params._id)
    .then(wishlist => res.status(200).send(wishlist))
    .catch(next)
})

export default router
