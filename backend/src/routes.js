const CategoriesRoutes = require('./routes/CategoryRoute')
const DeviceRoutes = require('./routes/DeviceRoute')

exports.registerRoutes = (app) => {
  app.use('/api/categories', CategoriesRoutes),
  app.use('/api/devices', DeviceRoutes)
}