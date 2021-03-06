const router = require('express').Router()
const articleController = require('../controllers/articleController')
const middleware = require('../middlewares/image')
const isLogin = require('../middlewares/isLogin')
const isAuthor = require('../middlewares/isAuthor')

router.get('/', articleController.allArticles)
router.get('/?', articleController.findTag)
router.get('/getArticles', isLogin, articleController.getMyArticles)
router.post('/', isLogin, middleware.multer.single('image'), middleware.sendUploadToGCS, articleController.addArticle)
router.get('/:id', articleController.getArticle)
router.put('/:id', isLogin, isAuthor, articleController.editArticle)
router.delete('/:id', isLogin, isAuthor, articleController.removeArticle)

module.exports = router