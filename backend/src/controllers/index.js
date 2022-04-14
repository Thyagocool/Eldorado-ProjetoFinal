const Repositories = require('../repositories/index')

const CategoryController = require('./CategoryController')

module.exports = {
    CategoryController: new CategoryController(Repositories.CategoryRepository)
}