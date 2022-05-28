import Product from "../models/products-models"


class ProductService {
    create(produto) {
        const novoProduto = new Product(produto)
        return novoProduto.save()
    }

    async findAll(params) {
        const page = params.page || 1
        const perPage = params.perPage || 10
        const orderBy = params.orderBy || 'code'
        const orderDirection = params.orderDirection || 'asc'
        const sort = {[orderBy]: orderDirection === 'asc' ? 1 : -1}
        const skip = (page - 1) * perPage
        const filter = {}

        if(params.title) filter.title = {$regex: params.title, $options: 'i'}
        if(params.author) filter.author = {$regex: params.author, $options: 'i'}
        
        const products = await Product.find(filter).sort(sort).skip(skip).limit(perPage)
        const total = await Product.countDocuments()
        const pages = Math.ceil(total / perPage)
        const count = products?.length ?? 0
        return [page, perPage, total, products, count, pages]

    }

    async find(id) {        
        const product = await Product.findOne({_id: id})
        return product
    }

    async update(id, productData) {
        const product = await Product.findOneAndUpdate({_id: id}, {...productData})
        return product
    }

    async delete(id) {
        const product = await Product.deleteOne({_id: id})
        return product
    }

    async findByCode(code) {
        const product = await Product.findOne({ code })
        return product
    }
}

export default ProductService