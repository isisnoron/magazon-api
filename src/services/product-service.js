import mongoose from "mongoose"
import Produto from "../models/products-models"
import config from '../config'

mongoose.connect(config.connectionString)

class ProdutoService {
    create(produto) {
        const novoProduto = new Produto(produto)
        return novoProduto.save()
    }

    async findAll(params) {
        const page = params.page || 1
        const perPage = params.perPage || 10
        const orderBy = params.orderBy || 'title'
        const orderDirection = params.orderDirection || 'asc'
        const sort = {[orderBy]: orderDirection === 'asc' ? 1 : -1}
        const skip = (page - 1) * perPage
        
        const products = await Produto.find().sort(sort).skip(skip).limit(perPage)
        const total = await Produto.countDocuments()
        const pages = Math.ceil(total / perPage)
        const count = products?.length ?? 0
        return [page, perPage, total, products, count, pages]

    }

    async find(id) {        
        const product = await Produto.findOne({_id: id})
        if(!product) throw new Error('Produto não encontrado', { status: 404 })
        return product
    }
}

export default ProdutoService