const router = require('express').Router()
const article = require('./articles')
const user = require('./users')

router.use('/articles', article)
router.use('/', user)

module.exports = router