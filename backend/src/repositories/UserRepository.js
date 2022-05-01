const UserModel = require('../database/models/UserModel')

class UserRepository {

  async login(login, password) {
    try {
      return await UserModel.findOne({ where: { login: login, password: password } })
    } catch (error) {
      console.log('Erro ao buscar o login -', error.message)
    }
  }

  async findLogin(login) {
    try {
      return await UserModel.findOne({ where: { login: login} })
    } catch (error) {
      console.log('Erro ao buscar o login -', error.message)
    }
  }
  
  async selectAll() {
    try {
      return await UserModel.findAll()
    } catch (error) {
      console.log('Erro ao selecionar vários usuários -', error.message)
    }
  }

  async selectByFilter(id) {
    try {
      return await UserModel.findByPk(id)
    } catch (error) {
      console.log('Erro ao selecionar um usuário -', error.message)
    }
  }

  async add(user) {
    try {
      return await UserModel.create(user)
    } catch (error) {
      console.log('Erro ao salvar um usuário -', error.message)
    }
  }

  async update(id, params) {
    try {
      const user = await UserModel.findByPk(id)
      return await user.update(params)
    } catch (error) {
      console.log('Erro ao editar um usuário -', error.message)
    }
  }

  async remove(id) {
    try {
      const user = await UserModel.findByPk(id)
      
      return await user.destroy({
        where: {
          id:id
        }
      })
    } catch (error) {
      console.log('Erro ao remover um usuário -', error.message)
    }
  }
}

module.exports = UserRepository