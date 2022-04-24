const routes = require('./routes/')
const UserService = require('./services/UserService')

const authorization = UserService.authorization
const registerRoutes = (app) => {

    for (const route of routes) {
      app.use(route.name, route.router)
    }
}

module.exports = { registerRoutes }