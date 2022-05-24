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

    searchClientsByName(nameClients, query) {
        const clientService = new ClientService()
        return clientService.searchClientsByName(nameClients, query)
    }

    searchClientByWishlist(idWishlist) {
        const clientService = new ClientService()
        return clientService.searchClientByWishlist(idWishlist)
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

    updateClient(idClient, client) {
        console.log('atualizando cliente com id: ', idClient)
        const clientService = new ClientService()
        return clientService.updateClient(idClient, client)
    }

    removeClient(idClient) {
        console.log('removendo cliente com id: ', idClient)
        const clientService = new ClientService()
        return clientService.removeClient(idClient)
    }
}

export default ClientController