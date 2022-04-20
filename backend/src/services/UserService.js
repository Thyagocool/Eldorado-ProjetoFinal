const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/authconfig')

const UserRepository = require('../repositories/UserRepository')

const userRepository = new UserRepository()

class UserService {

    passwordEnconder(password) {
        const hash = bcrypt.hashSync(password)
        return hash
    }

    async create(user) {

        const existsUser = await userRepository.findLogin(user.login)

        if (existsUser != null) {
            throw new Error("Login já registrado!");
        }

        user.password = await this.passwordEnconder(user.password)

        const createUser = await userRepository.add(user)

        return createUser

    }
    

    async update(user){
        const existsUser = await userRepository.findLogin(user.login)

        const validPassword = bcrypt.compareSync(user.password, existsUser.password)

        if(!validPassword){
            user.password = await this.passwordEnconder(user.password)
        }

        const updateUser = await userRepository.update(user)

        return updateUser
    }

    async login(user, res){
        const {login, password} = user
        const existsUser = await userRepository.findLogin(login)
        const validPassword = bcrypt.compareSync(password, existsUser.password)

        
        if((existsUser) && (validPassword)){
            const {id} = existsUser

            const token = await jwt.sign({ id }, authConfig.SECRET, authConfig.OPTIONS);

            return res.status(200).json({ usuario: { login }, token })

        }else{
            return res.status(400).json({ mensagem: 'Login e/ou senha incorretos' })
        }

    }

    async authentication(request, response, next){
        const authorization = request.headers.authorization

        if (authorization === null || authorization === undefined) {
            return response.status(400).json({ mensagem: 'Token não informado' })
        }

        const token = authorization.split(' ')[1]

        try {
console.log('authorization', authorization)
            jwt.verify(token, autenticacao.secreteKey)
        
            next()

        } catch (error) {
            return response.status(401).json({ mensagem: 'Usuário não autorizado' })
        }
    }

}

module.exports = UserService