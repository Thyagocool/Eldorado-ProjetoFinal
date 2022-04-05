const DeviceModel = require('../database/models/DeviceModel')
const CategoryModel = require('../database/models/CategoryModel')

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

  async selectByFilter(filter) {
    try {
      return await DeviceModel.findAll({
        where: filter
      })
    } catch (error) {
      console.log('Erro ao selecionar por filtro vários dispositivos -', error.message)
    }
  }

  async update(device) {
    try {
      return await DeviceModel.update(device, {
        where: {
          id : device.id
        }
      })
    } catch (error) {
      console.log('Erro ao editar um dispositivo -', error.message)
    }
  }

  async remove(id) {
    try {
      return await DeviceModel.destroy({
        where: {
          id
        }
      })
    } catch (error) {
      console.log('Erro ao remover uma dispositivo -', error.message)
    }
  }
}

module.exports = DeviceRepository