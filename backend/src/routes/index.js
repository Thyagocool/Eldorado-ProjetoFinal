const CategoryRoutes = require('./CategoryRoutes')
const DeviceRoutes = require('./DeviceRoutes')

module.exports = [
    { name: '/api/categories', router: CategoryRoutes },
    { name: '/api/devices', router: DeviceRoutes },
]