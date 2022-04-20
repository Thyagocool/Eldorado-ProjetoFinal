const Repository = require('./Repository')

const CategoryRepository = require('./CategoryRepository')
const DeviceRepository = require('./DeviceRepository')
const UserRepository = require('./UserRepository')

module.exports = {
    CategoryRepository: new Repository(new CategoryRepository()),
    DeviceRepository: new Repository(new DeviceRepository()),
    UserRepository: new Repository(new UserRepository())
}