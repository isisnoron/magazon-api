import res from 'express/lib/response'
import mongoose from 'mongoose'
import { paginate } from 'mongoose-paginate'
import config from '../config'

mongoose.connect(config.connectionString)
const db = mongoose.connect(config.connectionString)
import Client from '../models/clients-models'
import Wishlist from '../models/wishilist-models'

class ClientService {
    searchClients(params) {
        if (params !== undefined && params !== null) {
            return Client.find({_id: params})
        } else {
            return Client.find({})
        }
    } 
    
    async searchClientByEmail(params) {
        return Client.find({email: params})
    }

    searchClientsByName(params, query) {
        const page = query.page
        const limit = query.limit

        if ((query.page || query.limit) == undefined || (query.page || query.limit) == null) {
            return Client.find({name: {$regex: new RegExp(params), $options: 'i'}})
        } else {
            return Client.paginate({
                name: {$regex: new RegExp(params), $options: 'i'}
            }, {page, limit})
        }  
    }

    async searchClientByWishlist(params) {
        const response = await Wishlist.findById({_id: params})
        const clientId = await (response.client).toString()
        return Client.find({_id: clientId})
    }

    async registerClient(req, res) {
        const newClient = new Client(req)
        return newClient.save()
    }

    async updateClient(idClient, upClient) {
        return Client.findOneAndUpdate({_id: idClient}, upClient)
    }

    async removeClient(req, res) {
        await Wishlist.deleteMany(req._id)
        return Client.findOneAndDelete({_id: req})       
    }
}

export default ClientService
