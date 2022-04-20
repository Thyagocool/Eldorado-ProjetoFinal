const CategoryRoutes = require('./CategoryRoutes')
const DeviceRoutes = require('./DeviceRoutes')
const UserRoutes = require('./UserRoutes')

module.exports = [
    { name: '/api/categories', router: CategoryRoutes },
    { name: '/api/devices', router: DeviceRoutes },
    { name: '/api/users', router: UserRoutes },
]