const CategoryModel = require('../database/models/CategoryModel')

class CategoryRepository {
  async add(category) {
    try {
      return await CategoryModel.create(category)
    } catch (error) {
      console.log('Erro ao salvar uma categoria -', error.message)
    }
  }

  async selectAll() {
    try {
      return await CategoryModel.findAll()
    } catch (error) {
      console.log('Erro ao selecionar várias categorias -', error.message)
    }
  }

  async selectByFilter(filter) {
    try {
      return await CategoryModel.findAll({
        where: filter
      })
    } catch (error) {
      console.log('Erro ao selecionar por filtro várias categorias -', error.message)
    }
  }

  async update(category) {
    try {
      return await category.save()
    } catch (error) {
      console.log('Erro ao editar uma categoria -', error.message)
    }
  }

  async remove(id) {
    try {
      return await CategoryModel.destroy({
        where: {
          id
        }
      })
    } catch (error) {
      console.log('Erro ao remover uma categoria -', error.message)
    }
  }
}

module.exports = CategoryRepository