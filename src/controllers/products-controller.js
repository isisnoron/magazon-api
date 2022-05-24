import ProdutoService from "../services/product-service"

class ProductController {
    async findAll(req, res){
        const params = req.query
        const produtoService = new ProdutoService()
        const [page, perPage, total, products, count, pages] = await produtoService.findAll(params)
        return res.json({page, perPage, total, products, count, pages})
    }

    async create(produto, res) {
       
            const requiredFields = ['title', 'author', 'description', 'price']
            for(let field of requiredFields) {
                if (!Object.keys(produto).includes(field) || !produto[field]) {
                    return res.status(400).json({
                        error: `Missing ${field} field`
                    })
                }
            }
            const produtoService = new ProdutoService()
            const response = await produtoService.create(produto)

            return res.json(response)
          
    }

    async find(req, res) {
        const { id } = req.params
        const produtoService = new ProdutoService()
        const product = await produtoService.find(id)
        return res.json(product)
       
    }

    async update(req, res) {
        const {id} = req.params
        const productUpdate = req.body
        const productService = new ProdutoService()
        const product = await productService.update(id, productUpdate)

        return res.status(200).json(product)
    }

    async delete(req, res) {
        const {id} = req.params
        const produtoService = new ProdutoService()
        const product = await produtoService.delete(id)
        return res.json(product)
    }
    
}

export default ProductController