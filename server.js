import express from "express"

import bodyParser from 'body-parser'

import router from "./src/routes"

const app = express()

app.use(bodyParser.json())

app.use('/', router)

app.listen(3000, () => {
    console.log('Executando porta 3000')
})