import ClientService from '../services/clients-service'

class ClientController {
    searchClientById(idClient) {
        const clientService = new ClientService()
        return clientService.searchClients(idClient)
    }

    searchClientByEmail(emailClient) {
        const clientService = new ClientService()
        return clientService.searchClientByEmail(emailClient)
    }

    searchClientsByName(nameClients, page, limit) {
        const clientService = new ClientService()
        return clientService.searchClientsByName(nameClients, page, limit)
    }

    searchClients() {
        const clientService = new ClientService()
        return clientService.searchClients()
    }

    registerClient(client, res) {
        console.log('Cadastrando um novo cliente...', client)
        const clientService = new ClientService()
        return clientService.registerClient(client)
    }
}

export default ClientController