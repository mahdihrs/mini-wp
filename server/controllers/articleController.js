const Article = require('../models/article')

class Controller {
    static allArticles(req, res) {
        let search = {}
        if (req.query.search) {
            search = { title: new RegExp(`.*${req.query.search}.*`, `i`) }
        }
        Article.find(search)
        .then(articles => {
            res
                .status(200)
                .json({
                    msg: `Fetching all articles`,
                    data: articles
                })
        })
        .catch(err => {
            res
                .status(500)
                .json({
                    msg: `Internal server error`,
                    err: err
                })
        })
    }

    static addArticle(req, res) {
        // console.log(req.file)
        let data = JSON.parse(req.body.data)
        Article.create({
            title: data.title,
            content: data.content,
            imgUrl: req.file.cloudStoragePublicUrl
        })
        .then(newArticle => {
            res
                .status(201)
                .json({
                    msg: `Creating an article success`,
                    data: newArticle
                })
        })
        .catch(err => {
            res
                .status(500)
                .json({
                    msg: `Internal server error`,
                    err: err
                })
        })
    }

    static getArticle(req, res) {
        Article.findById(req.params.id)
        .then(article => {
            res
                .status(201)
                .json({
                    msg: `Fetch the article`,
                    data: article
                })
        })
        .catch(err => {
            res
                .status(500)
                .json({
                    msg: `Internal server error`,
                    err: err
                })
        })
    }

    static editArticle(req, res) {
        let filter = ['title', 'content']
        let filtered = {}
        for (const key in req.body) {
            let findFilter = filter.includes(key)
            if (findFilter) filtered[key] = req.body[key]
        }
        Article.findByIdAndUpdate(req.params.id, filtered, { new: true })
        .then(updated => {
            res
                .status(200)
                .json({
                    msg: `Article successfully been updated`,
                    data: updated
                })
        })
    }

    static removeArticle(req, res) {
        Article.findByIdAndDelete(req.params.id)
        .then(deleted => {
            res
                .status(200)
                .json({
                    msg: `Successfully delete the article`,
                    data: deleted
                })
        })
        .catch(err => {
            res
                .status(500)
                .json({
                    msg: `Internal server error`,
                    err: err
                })        
        })
    }

    static getPreview(req, res) {
        console.log(req.file)
        // try {
            
        // } catch (err) {
        //     res
        //         .status(500)
        //         .json({
        //             msg: `Internal server error`,
        //             err: err
        //         })  
        // }
    }
}

module.exports = Controller