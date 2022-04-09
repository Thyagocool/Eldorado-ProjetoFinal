const CategoryRepository = require('../repositories/CategoryRepository')
const categoryRepository = new CategoryRepository()

exports.get =  async (req, res) =>{
    try {
        const categories = await categoryRepository.selectAll()
        return res.status(200).json(categories)
    } catch (error) {
        return res.status(400).json({message: error.message})         
    }
}

exports.getOne =  async (req, res) =>{
    try {
        const {id}  = req.params
        const categories = await categoryRepository.selectByFilter(id)
        return res.status(200).json(categories)
    } catch (error) {
        return res.status(400).json({message: error.message})         
    }
}

exports.post = async (req, res) => {
    try {
        const category = await categoryRepository.add(req.body)
        if(category){
            return res.status(200).json(category)
        }
    } catch (error) {
        return res.status(400).json({message: error.message})   
    }
}

exports.update = async (req, res) => {
    try {
        category = await categoryRepository.update(req.body)
        if(category){
            return res.status(200).json(category)
        }
    } catch (error) {
        return res.status(400).json({message: error.message})   
    }
    
}

exports.delete = async (req, res) => {
    try {
        const {id}  = req.params
        category = await categoryRepository.remove(id)
        console.log('----------------------------voltou')
        return res.status(200).json({message: "Categoria Excluida"})      
    } catch (error) {
        return res.status(400).json({message: error.message}) 
    }
}