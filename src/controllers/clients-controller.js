import ClientService from '../services/clients-service'

class ClientController {
    
    async searchClientById(req, res) {
        try {
            const paramsId = req
            const clientService = new ClientService()
            const client = await clientService.searchClients(paramsId)
            return res.json(client)
        } catch (err) {
            return res.status(404).json("Client not found: invalid ID")
        }
    }

    async searchClientByEmail(req, res) {
        try {
            const paramsEmail = req
            const clientService = new ClientService()
            const client = await clientService.searchClientByEmail(paramsEmail)
            return res.json(client)
        } catch (err) {
            return res.status(404).json("Client not found: invalid email")
        }
    }

    async searchClientsByName(req, res) {
        try {
            const paramsName = req.params.name
            const query = req.query
            console.log(query)
            const clientService = new ClientService()
            const client = await clientService.searchClientsByName(paramsName, query)
            return res.json(client)
        } catch (err) {
            return res.status(404).json("Client not found: invalid name")
        }
    }

    async searchClientByWishlist(req, res) {
        try {
            const paramIdWishlist = req
            const clientService = new ClientService()
            const client = await clientService.searchClientByWishlist(paramIdWishlist)
            return res.json(client)
        } catch (err) {
            return res.status(404).json("Client not found: invalid id wishlist")
        }
    }

    async searchClients(req, res) {
        try {
            const clientService = new ClientService()
            const client = await clientService.searchClients()
            return res.json(client)
        } catch (err) {
            return res.status(500).json("Internal Server")
        }
    }

    async registerClient(req, res) {
        try{
            const clientService = new ClientService()
            const response = await clientService.registerClient(req)
            return res.status(200).json(response)
        } catch(err){
            return res.status(400).json("Unable to register")
        }
    }

    async updateClient(req, res) {
        try {
            const clientService = new ClientService()
            const idClient = req.params
            const upClient = req.body
            const response = await clientService.updateClient(idClient, upClient)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json("Unable to update")           
        }
    }

    async removeClient(req, res) {
        try {
            const clientService = new ClientService()
            const idClient = req
            const response = await clientService.removeClient(idClient)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json("Unable to delete")           
        }
    }
}

export default ClientController