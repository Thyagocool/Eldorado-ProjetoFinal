const router = require('express').Router()
const Controllers = require('../controllers/')

const controller = Controllers.DeviceController

router.get('/', controller.get)

router.get('/:id', controller.getOne)

router.post('/', controller.post)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)

module.exports = router