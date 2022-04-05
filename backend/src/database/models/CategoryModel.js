const { Sequelize } = require('sequelize')
const database = require('../index')

const CategoryModel = database.define('categories', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { timestamps: false })

module.exports = CategoryModel