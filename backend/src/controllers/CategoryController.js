const CategoryRepository = require('../repositories/CategoryRepository')
const categoryRepository = new CategoryRepository()

class CategoryController {
    
    constructor(repository) {
        this.repository = repository;
        
    }

    async get(req, res){
        try {
            const categories = await categoryRepository.selectAll()
            return res.status(200).json(categories)
        } catch (error) {
            return res.status(400).json({message: error.message})         
        }
    }

    async getOne(req, res){
        try {
            const {id}  = req.params
            const categories = await categoryRepository.selectByFilter(id)
            return res.status(200).json(categories)
        } catch (error) {
            return res.status(400).json({message: error.message})         
        }
    }

    async post(req, res) {
        try {
            const category = await categoryRepository.add(req.body)
            if(category){
                return res.status(200).json(category)
            }
        } catch (error) {
            return res.status(400).json({message: error.message})   
        }
    }

    async update(req, res) {
        try {
            category = await categoryRepository.update(req.body)
            if(category){
                return res.status(200).json(category)
            }
        } catch (error) {
            return res.status(400).json({message: error.message})   
        }
        
    }

    async delete(req, res) {
        try {
            const {id}  = req.params
            await categoryRepository.remove(id)
            return res.status(200).json({message: "Categoria Excluida"})      
        } catch (error) {
            return res.status(400).json({message: error.message}) 
        }
    }
}

module.exports = CategoryController