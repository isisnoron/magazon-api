import express from 'express'

const router = express.Router()

import ClientController from '../controllers/clients-controller'

const clientController = new ClientController()

router.get('/wishlist/id/:wishlist_id', (req, res) => {
    clientController.searchClientByWishlist(req.params.wishlist_id, res)
})

router.get('/email/:email', (req, res) => {clientController.searchClientByEmail(req.params.email, res)})

router.get('/name/:name', (req, res) => {clientController.searchClientsByName(req, res)})

router.get('/id/:_id', (req, res) => {clientController.searchClientById(req.params._id, res)})

router.put('/:_id', (req, res) => {clientController.updateClient(req, res)})

router.delete('/:_id', (req, res) => {clientController.removeClient(req.params._id, res)})

router.post('/', (req, res) => {clientController.registerClient(req.body, res)})

router.get('/', (req, res) => {clientController.searchClients(req, res)})



export default router