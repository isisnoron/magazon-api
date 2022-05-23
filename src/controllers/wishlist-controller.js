import WishlistService from '../services/wishlist-service'

const wishlistService = new WishlistService() 
class WishlistController {

    //TODO: tratamento de erros

    searchWishlist() {
        return wishlistService.searchWishlists()
    }

    searchWishlistId(idWishlist) {
        return wishlistService.searchWishlists(idWishlist)
    }

    searchWishlistByClientId(clientId) {
        return wishlistService.searchWishlistByClientId(clientId)
    }

    searchWishlistByProductId(productId) {
        return wishlistService.searchWishlistByProductId(productId)
    }

    registerWishlist(wishlist) {
        return wishlistService.registerWishlist(wishlist)
    }

    updateWishlist(idWishlist, wishlist) {
        return wishlistService.updateWishlist(idWishlist, wishlist)
    }
        
    removeWishlist(idWishlist) {
        return wishlistService.removeWishlist(idWishlist)
    } 

}

export default WishlistController