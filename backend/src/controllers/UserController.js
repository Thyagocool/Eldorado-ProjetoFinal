const UserService = require('../services/UserService')
const userService = new UserService()

class UserController {
    constructor(repository){

        this.repository = repository

    }

    login = async (req, res) => {
        try {
            
            await userService.login(req.body, res)
           
        } catch (error) {
            
            return res.status(400).json({message: error.message})                     
        }
    }

    get = async (req, res) =>{
        try {
            const user = await this.repository.selectAll();
            return res.status(200).json(user)
        } catch (error) {
            return res.status(400).json({message: error.message})         
        }
    }

    getOne = async (req, res) =>{
        try {
            const { id } = req.params
            const users = await this.repository.selectByFilter(id)
            return res.status(200).json(users)
        } catch (error) {
            return res.status(400).json({message: error.message})         
        }
    }

    post = async (req, res) => {
        try {
            const user = await userService.create(req.body)
            if(user){
                return res.status(201).json(user)
            }
        } catch (error) {
            return res.status(400).json({message: error.message})   
        }
    }

    update = async (req, res) => {
        try {
            const {id} = req.params
            const user = await userService.update(id, req.body)
            if(user){
                return res.status(200).json(user)
            }
        } catch (error) {
            return res.status(400).json({message: error.message})   
        }
        
    }

    delete = async (req, res) => {
        try {
            const {id}  = req.params
            const user = await this.repository.remove(id)
            return res.status(200).json({message: "Usuário Excluido"})      
        } catch (error) {
            return res.status(400).json({message: error.message}) 
        }
    }

}

module.exports = UserController