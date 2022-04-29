const Sequelize = require('sequelize')
const optionsDatabase = require('../config/database')

const sequelize = new Sequelize(
    optionsDatabase
)

module.exports = sequelize