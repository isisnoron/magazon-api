import express from 'express'

const router = express.Router()

import ClientController from '../controllers/clients-controller'

const clientController = new ClientController()

router.get('/id/:_id', (req, res, next) => {
    clientController.searchClientById(req.params._id)
    .then(clients => res.status(200).send(clients))
    .catch(next)
})

router.get('/email/:email', (req, res, next) => {
    clientController.searchClientByEmail(req.params.email)
    .then(clients => res.status(200).send(clients))
    .catch(next)
})

router.get('/name/:name', (req, res, next) => {
    clientController.searchClientsByName(req.params.name, req.query)
    .then(clients => res.status(200).send(clients))
    .catch(next)
})

router.get('/wishlist/id/:wishlist_id', (req, res, next) => {
    clientController.searchClientByWishlist(req.params)
    .then(clients => res.status(200).send(clients))
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

router.get('/', (req, res, next) => {
    clientController.searchClients()
    .then(clients => res.status(200).send(clients))
    .catch(next)
})

router.post('/', (req, res, next) => {
    clientController.registerClient(req.body)
    .then(client => res.status(200).send(client)) 
    .catch(next)
})

export default router