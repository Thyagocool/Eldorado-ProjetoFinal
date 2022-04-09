const DeviceModel = require('../database/models/DeviceModel')

class DeviceRepository {
  async add(device) {
    try {
      return await DeviceModel.create(device)
    } catch (error) {
      console.log('Erro ao salvar uma dispositivo -', error.message)
    }
  }

  async selectAll() {
    try {
      return await DeviceModel.findAll()
    } catch (error) {
      console.log('Erro ao selecionar vários dispositivos -', error.message)
    }
  }

  async selectByFilter(id) {
    try {
      return await DeviceModel.findByPk(id)
    } catch (error) {
      console.log('Erro ao selecionar uma dispositivo -', error.message)
    }
  }

  async update(newdevice) {
    try {
      const device = await DeviceModel.findByPk(newdevice.id)
      return await device.update(newdevice)
    } catch (error) {
      console.log('Erro ao editar uma dispositivo -', error.message)
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
      console.log('Erro ao remover uma dispositivo -', error.message)
    }
  }
}

module.exports = DeviceRepository