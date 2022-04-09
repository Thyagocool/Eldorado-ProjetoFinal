const DeviceRepository = require('../repositories/DeviceRepository')
const deviceRepository = new DeviceRepository()

exports.get =  async (req, res) =>{
    try {
        const devices = await deviceRepository.selectAll()
        return res.status(200).json(devices)
    } catch (error) {
        return res.status(400).json({message: error.message})         
    }
}

exports.getOne =  async (req, res) =>{
    try {
        const {id}  = req.params
        const devices = await deviceRepository.selectByFilter(id)
        return res.status(200).json(devices)
    } catch (error) {
        return res.status(400).json({message: error.message})         
    }
}

exports.post = async (req, res) => {
    try {
        const device = await deviceRepository.add(req.body)
        if(device){
            return res.status(200).json(device)
        }
    } catch (error) {
        return res.status(400).json({message: error.message})   
    }
}

exports.update = async (req, res) => {
    try {
        device = await deviceRepository.update(req.body)
        if(device){
            return res.status(200).json(device)
        }
    } catch (error) {
        return res.status(400).json({message: error.message})   
    }
    
}

exports.delete = async (req, res) => {
    try {
        const {id}  = req.params
        device = await deviceRepository.remove(id)
        return res.status(200).json({message: "Dispositivo Excluido"})      
    } catch (error) {
        return res.status(400).json({message: error.message}) 
    }
}