const Repositories = require('../repositories/index')

const CategoryController = require('./CategoryController')
const DeviceController  = require('./DeviceController')

module.exports = {
    CategoryController: new CategoryController(Repositories.CategoryRepository),
    DeviceController: new DeviceController(Repositories.DeviceRepository)
}