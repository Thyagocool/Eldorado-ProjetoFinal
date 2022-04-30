const CategoryModel = require('../database/models/CategoryModel')
const DeviceModel = require('../database/models/DeviceModel')

class DeviceRepository {
  async add(device) {
    try {
      return await DeviceModel.create(device)
    } catch (error) {
      console.log('Erro ao salvar um dispositivo -', error.message)
    }
  }

  async selectAll() {
    try {
      return await DeviceModel.findAll({ include: CategoryModel })
    } catch (error) {
      console.log('Erro ao selecionar vários dispositivos -', error.message)
    }
  }

  async selectByFilter(id) {
    try {
      return await DeviceModel.findByPk(id)
    } catch (error) {
      console.log('Erro ao selecionar um dispositivo -', error.message)
    }
  }

  async update(id, params) {
    try {
      if(id){
        const device = await DeviceModel.findByPk(id)
        return await device.update(params)
      }else{
        return {mensagem: "Id não encontrado"}
      }
    } catch (error) {
      console.log('Erro ao editar um dispositivo -', error.message)
    }
  }
  async remove(id) {
    try {
      const device = await DeviceModel.findByPk(id)
      
      return await device.destroy({
        where: {
          id:id
        }
      })
    } catch (error) {
      console.log('Erro ao remover um dispositivo -', error.message)
    }
  }
}

module.exports = DeviceRepository