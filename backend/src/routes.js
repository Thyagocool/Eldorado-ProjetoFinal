const CategoriesRoutes = require('./routes/CategoryRoute')

exports.registerRoutes = (app) => {
  app.use('/api/categories', CategoriesRoutes)
}