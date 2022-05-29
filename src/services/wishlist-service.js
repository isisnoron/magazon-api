import mongoose from 'mongoose'

import Wishlist from '../models/wishilist-models'
class WishlistService {

    async searchWishlists(params) {
        const page = params.page || 1
        const perPage = params.perPage || 10
        const orderBy = params.orderBy || 'title'
        const orderDirection = params.orderDirection || 'asc'
        const sort = { [orderBy]: orderDirection === 'asc' ? 1 : -1 }
        const skip = (page - 1) * perPage
        const filter = {}

        const wishlists = await Wishlist.find(filter).sort(sort).skip(skip).limit(perPage)
            .populate([{path: 'client', select: ['name', 'email', 'cpf'] }, {path: 'products', select: ['title', 'author', 'description', 'price'] }])
        const total = await Wishlist.countDocuments()
        const pages = Math.ceil(total / perPage)
        const count = wishlists?.length ?? 0
        return [page, perPage, total, wishlists, count, pages]
    }

    async searchWishlistsId(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) return false;
        try {
            const wishlist = await Wishlist.findOne({ _id: id })
                .populate([{path: 'client', select: ['name', 'email', 'cpf'] }, {path: 'products', select: ['title', 'author', 'description', 'price'] }])
            return wishlist
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async searchWishlistByClientId(idClient) {
        if (!mongoose.Types.ObjectId.isValid(idClient)) return false;
        const wishlist = await Wishlist.find({ client: { _id: idClient } })
            .populate([{path: 'client', select: ['name', 'email', 'cpf'] }, {path: 'products', select: ['title', 'author', 'description', 'price'] }])
        return wishlist
    }

    async searchWishlistByProductId(productId) {
        if (!mongoose.Types.ObjectId.isValid(productId)) return false;
        const wishlist = await Wishlist.find({ products: { _id: productId } })
            .populate([{path: 'client', select: ['name', 'email', 'cpf'] }, {path: 'products', select: ['title', 'author', 'description', 'price'] }])
        return wishlist
    }
    
    registerWishlist(wishlist) {
        const novoWishlist = new Wishlist(wishlist)
        return novoWishlist.save()
    }

    async updateWishlist(id, wishlist) {
        const wishlistUpdate = await Wishlist.findOneAndUpdate({ _id: id }, wishlist)
        return wishlistUpdate
    }

    async removeWishlist(idWishlist) {
        const wishlist = await Wishlist.findOneAndDelete({ _id: idWishlist })
        return wishlist
    }
}

export default WishlistService
