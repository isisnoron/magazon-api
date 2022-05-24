import res from 'express/lib/response'
import mongoose from 'mongoose'
import { paginate } from 'mongoose-paginate'
import config from '../config'

mongoose.connect(config.connectionString)
const db = mongoose.connect(config.connectionString)
import Client from '../models/clients-models'
import Wishlist from '../models/wishilist-models'

class ClientService {
    searchClients(idClient) {
        const params = {}
        if (idClient !== undefined && idClient !== null) {
            params._id = idClient
        }
        return Client.find(params)
    } 
    
    searchClientByEmail(emailClient) {
        const params = {}
        if (emailClient !== undefined && emailClient !== null) {
            params.email = emailClient
        }
        return Client.find(params)
    }

    searchClientsByName(nameClients, query) {
        const params = {}
        if (nameClients !== undefined && nameClients !== null) {
            params.name = nameClients
        }

        const page = query.page
        const limit = query.limit

        if ((query.page || query.limit) == undefined || (query.page || query.limit) == null) {
            return Client.find({name: { $regex: new RegExp(params.name), $options: 'i'}})
        } else {
            return Client.paginate({
                name: { $regex: new RegExp(params.name), $options: 'i'}
            }, {page, limit}, function (err, result) {})
        }  
        // return Client.paginate(params, {page, limit}, function (err, result) {})
    }

    async searchClientByWishlist(idWishlist) {

        // const params = {}

        // if (idWishlist !== undefined && idWishlist !== null) {
        //     params.Wishlist_id = idWishlist
        // }
        const response = await Wishlist.findById(idWishlist.wishlist_id)
        const client_id = (response.client_id).toString()

        // console.log(typeof (response[0].client_id))
        return Client.find({"_id" : client_id})
    }

    registerClient(client) {
        const newClient = new Client(client)
        return newClient.save()
    }

    updateClient(idClient, client) {
        return Client.findOneAndUpdate({_id: idClient}, client)
    }

    async removeClient(idClient) {
        const retorno = await Wishlist.deleteMany(idClient._id)
        console.log("retorno", retorno)
        return Client.findOneAndDelete({_id: idClient})       
    }
}

export default ClientService
