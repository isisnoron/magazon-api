import mongoose from 'mongoose'
import config from '../config'

mongoose.connect(config.connectionString)
const db = mongoose.connect(config.connectionString)
import Client from '../models/clients-models'

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

    searchClientsByName(nameClients, page, limit) {
        const params = {}
        if (nameClients !== undefined && nameClients !== null) {
            params.name = nameClients
        }

        if (page !== undefined && limit !== undefined){
            return Client.paginate({
                name: { $regex: new RegExp(params.name), $options: 'i'}
            }, {page, limit}, function (err, result) {})
        } else {
            return Client.find({name: { $regex: new RegExp(params.name), $options: 'i'}
        })
        }
        // return Client.paginate(params, {page, limit}, function (err, result) {})
    }

    registerClient(client) {
        const newClient = new Client(client)
        return newClient.save()
    }
}

export default ClientService
