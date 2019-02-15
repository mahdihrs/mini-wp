const router = require('express').Router()
const articleController = require('../controllers/articleController')
const middleware = require('../middlewares/image')

router.get('/', articleController.allArticles)
router.post('/', middleware.multer.single('image'), middleware.sendUploadToGCS, articleController.addArticle)
router.get('/:id', articleController.getArticle)
router.put('/:id', articleController.editArticle)
router.delete('/:id', articleController.removeArticle)
router.post('/showPreview', middleware.multer.single('image'), middleware.sendUploadToGCS, articleController.getPreview)

module.exports = router