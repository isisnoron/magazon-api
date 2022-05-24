import { json } from "express/lib/response"
import ProdutoService from "../services/product-service"

class ProductController {
    
    async findAll(req, res){
        try{
            const params = req.query
            const produtoService = new ProdutoService()
            const [page, perPage, total, products, count, pages] = await produtoService.findAll(params)
            return res.status(200).json({page, perPage, total, products, count, pages})
        } catch(err){
            return res.status(500).json(err)
        }
    }

    async create(produto, res) {
       try{
            const requiredFields = ['code', 'title', 'author', 'description', 'price']
            for(let field of requiredFields) {
                if (!Object.keys(produto).includes(field) || !produto[field]) {
                    return res.status(400).json({
                        error: `Missing ${field} field`
                    })
                }
            }
            const produtoService = new ProdutoService()

            const hasProduct = await produtoService.findByCode(produto.code)
            console.log(hasProduct)
            if(hasProduct) return res.status(400).json({error: "Product code already exists"})

            const response = await produtoService.create(produto)
            return res.status(200).json(response)
        } catch(err){
            return res.status(500).json(err)
        }
    }

    async find(req, res) {
        try{
            const { id } = req.params
            const produtoService = new ProdutoService()
            const product = await produtoService.find(id)
            if(!product) return res.status(404).json({error: "Product not found"})
            return res.json(product)
        } catch(err){
            return res.status(500).json(err)
        }
    }
       

    async update(req, res) {
        try{
            const {id} = req.params
            const productUpdate = req.body
            const productService = new ProdutoService()
            const product = await productService.update(id, productUpdate)

            return res.status(200).json(product)
        } catch(err){
            return res.status(500).json(err)
        }
    }

    async delete(req, res) {
        try{
            const {id} = req.params
            const produtoService = new ProdutoService()
            const product = await produtoService.delete(id)
            return res.status(200).json(product)
        } catch(err){
            return res.status(500).json(err)
        }
    }
    
}

export default ProductController