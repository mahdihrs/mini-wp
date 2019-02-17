const router = require('express').Router()
const controller = require('../controllers/userController')

router.post('/login', controller.login)
router.post('/register', controller.register)

module.exports = router