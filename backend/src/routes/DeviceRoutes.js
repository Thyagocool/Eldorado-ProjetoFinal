const router = require('express').Router()
const DeviceController = require('../controllers/DeviceController')

router.get('/', DeviceController.get)

router.get('/:id', DeviceController.getOne)

router.post('/', DeviceController.post)

router.put('/', DeviceController.update)

router.delete('/:id', DeviceController.delete)

module.exports = router