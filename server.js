import express from 'express'
import swaggerUi  from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import bodyParser from 'body-parser'
import router from './src/routes'
import mongoose from "mongoose"
import env from './src/config/env'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json())
app.use(
    '/swagger',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);

app.use('/', router)

mongoose.connect(env.MONGO_DB_URI).then(() => {

    app.listen(process.env.PORT || 3000, () => {
        console.log('Executando na porta 3000...')
    })

})