const { Sequelize } = require('sequelize')
const database = require('../index')
const CategoryModel = require('./CategoryModel')

const DeviceModel = database.define('devices', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    color:{
        type: Sequelize.STRING(16), 
    },
    partnumber: {
        type: Sequelize.BIGINT,
        allowNull: false
    }
}, { timestamps: false })


DeviceModel.belongsTo(CategoryModel, { 
    foreignKey: 'category_id' 
})

DeviceModel.associate = function(models){
    DeviceModel.belongsTo(models.CategoryModel,{
        foreingkey: 'category_id',
        as: 'category'
    })
}


module.exports = DeviceModel