const router = require('express').Router()
const Controllers = require('../controllers/')

const controller = Controllers.CategoryController

router.get('/', controller.get)

router.get('/:id', controller.getOne)

router.post('/', controller.post)

router.put('/', controller.update)

router.delete('/:id', controller.delete)

module.exports = router