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

  async selectByFilter(id) {
    try {
      return await CategoryModel.findByPk(id)
    } catch (error) {
      console.log('Erro ao selecionar uma categoria -', error.message)
    }
  }

  async update(newcategory) {
    try {
      const category = await CategoryModel.findByPk(newcategory.id)
      return await category.update(newcategory)
    } catch (error) {
      console.log('Erro ao editar uma categoria -', error.message)
    }
  }
  async remove(id) {
    try {
      const category = await CategoryModel.findByPk(id)
      
      return await category.destroy({
        where: {
          id:id
        }
      })
    } catch (error) {
      console.log('Erro ao remover uma categoria -', error.message)
    }
  }
}

module.exports = CategoryRepository