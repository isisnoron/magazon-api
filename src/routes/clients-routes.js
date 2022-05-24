import express from 'express'

const router = express.Router()

import ClientController from '../controllers/clients-controller'

const clientController = new ClientController()

// Aqui estou acessando o localhost:3000/clients/ - vai listar todos os clients
router.get('/', (req, res, next) => {
    clientController.searchClients()
    .then(clients => res.status(200).send(clients))
    .catch(next)
})

// Aqui vou acessar o localhost:3000/clients/id/:_id - listar o cliente com aquele id
router.get('/id/:_id', (req, res, next) => {
    clientController.searchClientById(req.params._id)
    .then(clients => res.status(200).send(clients))
    .catch(next)
})

// Aqui vou acessar o localhost:3000/clients/email/:email - listar o cliente com aquele e-mail
router.get('/email/:email', (req, res, next) => {
    clientController.searchClientByEmail(req.params.email)
    .then(clients => res.status(200).send(clients))
    .catch(next)
})

// Aqui vou acessar o localhost:3000/clients/:parametro - listar todos os clientes com aquele parametro
// Se for por nome, todos os clientes que conterem aquele nome, mas e se for por código?
// Vou fazer por nome e depois defino a rota.
router.get('/name/:name', (req, res, next) => {
    clientController.searchClientsByName(req.params.name, req.query)
    .then(clients => res.status(200).send(clients))
    .catch(next)
})

// Rota para buscar o cliente informano a lista de desejo
router.get('/wishlist/id/:wishlist_id', (req, res, next) => {
    clientController.searchClientByWishlist(req.params)
    .then(clients => res.status(200).send(clients))
    .catch(next)
})

// POST
router.post('/', (req, res, next) => {
    clientController.registerClient(req.body)
    .then(client => res.status(200).send(client)) 
    .catch(next)
})

router.put('/:_id', (req, res, next) => {
    clientController.updateClient(req.params._id, req.body)
    .then(client => res.status(200).send(client))
    .catch(next)
})

router.delete('/:_id', (req, res, next) => {
    clientController.removeClient(req.params._id)
    .then(client => res.status(200).send(client))
    .catch(next)    
})

export default router