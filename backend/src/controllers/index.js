const Repositories = require('../repositories/index')

const CategoryController = require('./CategoryController')
const DeviceController  = require('./DeviceController')
const UserController  = require('./UserController')

module.exports = {
    CategoryController: new CategoryController(Repositories.CategoryRepository),
    DeviceController: new DeviceController(Repositories.DeviceRepository),
    UserController: new UserController(Repositories.UserRepository)
}