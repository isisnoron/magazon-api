import mongoose from 'mongoose'
import config from '../config'

mongoose.connect(config.connectionString)

import Wishlist from '../models/wishilist-models'
class WishlistService {

    searchWishlists(idWishlist) {
        const params = {}
        if (idWishlist !== undefined && idWishlist !== null) {
            params._id = idWishlist
            console.log(idWishlist)
        }
        return Wishlist.find(params).populate([{path: 'client', select: ['name', 'email'] }, 'products'])
    }

    searchWishlistByClientId (idClient) {
            const params = {}
            if (idClient !== undefined && idClient !== null) {
                params.client = {'_id': idClient}
            }
            return Wishlist.find(params).populate([{path: 'client', select: ['name', 'email'] }, 'products'])
    }

    searchWishlistByProductId (productId) {
            const params = {}
            if (productId !== undefined && productId !== null) {
                params.products = [{'_id': productId}]
            }
            return Wishlist.find(params).populate([{path: 'client', select: ['name', 'email'] }, 'products'])
    }

    registerWishlist(wishlist) {
        const novoWishlist = new Wishlist(wishlist)
        return novoWishlist.save()
    }

    // verificar novamente
    updateWishlist(idWishlist, wishlist) {
        return Wishlist.findOneAndUpdate({_id: idWishlist}, wishlist)
    }

    removeWishlist(idWishlist) {
        return Wishlist.findOneAndDelete({_id: idWishlist})
    }
}

export default WishlistService
