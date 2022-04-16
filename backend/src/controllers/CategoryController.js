

class CategoryController {
    
    constructor(repository) {

        this.repository = repository;
        
    }

    get = async (req, res) =>{
        try {
            const categories = await this.repository.selectAll()
            return res.status(200).json(categories)
        } catch (error) {
            return res.status(400).json({message: error.message})         
        }
    }

    getOne = async (req, res) => {
        try {
            const {id}  = req.params
            const categories = await this.repository.selectByFilter(id)
            return res.status(200).json(categories)
        } catch (error) {
            return res.status(400).json({message: error.message})         
        }
    }

    post = async (req, res) => {
        try {
            const category = await this.repository.add(req.body)
            if(category){
                return res.status(200).json(category)
            }
        } catch (error) {
            return res.status(400).json({message: error.message})   
        }
    }

    update = async (req, res) => {
        try {
            const category = await this.repository.update(req.body)
            if(category){
                return res.status(200).json(category)
            }
        } catch (error) {
            return res.status(400).json({message: error.message})   
        }
        
    }

    delete = async (req, res) => {
        try {
            const {id}  = req.params
            await this.repository.remove(id)
            return res.status(200).json({message: "Categoria Excluida"})      
        } catch (error) {
            return res.status(400).json({message: error.message}) 
        }
    }
}

module.exports = CategoryController