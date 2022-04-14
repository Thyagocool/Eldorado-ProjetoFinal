const Repository = require('./Repository')

const CategoryRepository = require('./CategoryRepository')
const DeviceRepository = require('./DeviceRepository')

module.exports = {
    CategoryRepository: new Repository(new CategoryRepository()),
    DeviceRepository: new Repository(new DeviceRepository())
}