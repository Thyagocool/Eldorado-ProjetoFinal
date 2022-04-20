// const DeviceRepository = require('../repositories/DeviceRepository')
// const deviceRepository = new DeviceRepository()

class DeviceController {
    constructor(repository){

        this.repository = repository

    }

    get = async (req, res) =>{
        try {
            const devices = await this.repository.selectAll()
            return res.status(200).json(devices)
        } catch (error) {
            return res.status(400).json({message: error.message})         
        }
    }

    getOne = async (req, res) =>{
        try {
            const {id}  = req.params
            const devices = await this.repository.selectByFilter(id)
            return res.status(200).json(devices)
        } catch (error) {
            return res.status(400).json({message: error.message})         
        }
    }

    post = async (req, res) => {
        try {
            const device = await this.repository.add(req.body)
            if(device){
                return res.status(201).json(device)
            }
        } catch (error) {
            return res.status(400).json({message: error.message})   
        }
    }

    update = async (req, res) => {
        try {
            const device = await this.repository.update(req.body)
            if(device){
                return res.status(200).json(device)
            }
        } catch (error) {
            return res.status(400).json({message: error.message})   
        }
        
    }

    delete = async (req, res) => {
        try {
            const {id}  = req.params
            const device = await this.repository.remove(id)
            return res.status(200).json({message: "Dispositivo Excluido"})      
        } catch (error) {
            return res.status(400).json({message: error.message}) 
        }
    }

}

module.exports = DeviceController