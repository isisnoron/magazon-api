import WishlistService from '../services/wishlist-service'

const wishlistService = new WishlistService() 
class WishlistController {

  async searchWishlist(req, res) {
    try {
      const params = req.query;
      const [page, perPage, total, wishlists, count, pages] = await wishlistService.searchWishlists(params);
      return res.status(200).json({ page, perPage, total, wishlists, count, pages });
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async searchWishlistsId(req, res) {
    try {
      const params = req.params._id;
      const idWishlist = await wishlistService.searchWishlistsId(params);
      if (!idWishlist) return res.status(404).json({ error: {
        "code": 404, "message": "Wishlist not found" 
      }});
      return res.json(idWishlist);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async searchWishlistByClientId(req, res) {
    try {
      const params = req.params._id;
      const idWishlist = await wishlistService.searchWishlistByClientId(params);
      if (!idWishlist)
        return res.status(404).json({ error: {
          "code": 404, "message": "Wishlist not found" 
        }});
      return res.json(idWishlist);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async searchWishlistByProductId(req, res) {
    try {
      const params = req.params._id;
      const wishlist = await wishlistService.searchWishlistByProductId(params);
      if (!wishlist)
        return res.status(404).json({ error: {
          "code": 404, "message": "Wishlist not found" 
        }});
      return res.json(wishlist);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async registerWishlist(wishlist, res) {
    try {
      const requiredFields = ["title", "description", "client", "products"];
      for (let field of requiredFields) {
        if (!Object.keys(wishlist).includes(field) || !wishlist[field]) {
          return res.status(400).json({err: `Bad Request. Missing ${field} field.`
          });
        }
        else if (new Set(wishlist.products).size !== wishlist.products.length) {
          return res.status(400).json({ err: {
            "code": 400, "message": "Bad Request. It's not possible to register duplicated products in the same wishlist." 
          }});
        }
      }

      const response = await wishlistService.registerWishlist(wishlist);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ err: `Error occurred. Unable to register a wishlist.` });
    }
  }

  async updateWishlist(req, res) {
    try {
      const { id } = req.params
      const wishlist = req.body
      console.log(wishlist, id)
      const wishlistUpdate = await wishlistService.updateWishlist(id, wishlist)
      return res.status(200).json(wishlistUpdate)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  async removeWishlist(req, res) {
    try {
      const { id } = req.params;
      const wishlist = await wishlistService.removeWishlist(id);
      if (!wishlist)
        return res.status(404).json({ error: {
          "code": 404, "message": "Wishlist not found" 
        }});
      return res.status(200).json(wishlist);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

}

export default WishlistController