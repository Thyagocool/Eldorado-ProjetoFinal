const router = require('express').Router()
const CategoryController = require('../controllers/CategoryController')

router.get('/', CategoryController.get)

router.get('/:id', CategoryController.getOne)

router.post('/', CategoryController.post)

router.put('/', CategoryController.update)

router.delete('/:id', CategoryController.delete)

module.exports = router