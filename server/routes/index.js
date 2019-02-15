const router = require('express').Router()
const article = require('./articles')

router.use('/articles', article)

module.exports = router