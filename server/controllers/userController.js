require('dotenv').config()
const User = require('../models/user')
const { generate } = require('../helpers/jwt')
const { decrypt } = require('../helpers/bcryptjs')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client('670497221809-rdt56lmo9f29ca1rfp8k3svm39q6gscd.apps.googleusercontent.com')//(process.env.CLIENT_ID);

class Controller {
    static register(req, res) {
        console.log('token')
        User.create(req.body)
        .then(newUser => {
            let token = generate(newUser)
            res
                .status(201)
                .json({
                    msg: `New user has been added`,
                    user: newUser,
                    token: token
                })
        })
        .catch(err => {
            // let modelValidation = ''
            // if (err.errors.email) modelValidation = 'email'
            // else if (err.errors.password) modelValidation = 'password'
            res
                .status(400)
                .json({
                    msg: `Internal server error`,
                    err: err
                    // pathValidation: modelValidation
                })
        })
    }

    static login(req, res) {
        let userData;
        if (!req.body.token) {
            return User.findOne({
                email: req.body.email
            })
            .then(user => {
                if (!user) {
                    res.json({
                        failedOn: `email`
                    })
                } else {
                    let passwordChecking = decrypt(req.body.password, user.password)
                    if (!passwordChecking) {
                        res.json({
                            failedOn: `password`
                        })
                    } else {
                        let token = generate(user)
                        res.json(token)
                    }
                }
            })
            .catch(err => {
                console.log(err)
                res
                    .status(500)
                    .json({
                        msg: `Internal server error`,
                        err: err
                    })
            })
        } else {
            client.verifyIdToken({
                idToken: req.body.token,
                audience: '670497221809-rdt56lmo9f29ca1rfp8k3svm39q6gscd.apps.googleusercontent.com'
            })
            .then(ticket => {
                const payload = ticket.getPayload()
                userData = payload
                return User.findOne({
                    email: payload.email
                })
            })
            .then(user => {
                if (!user) {
                    return User.create({
                        email: userData.email,
                        password: '000000'
                    })
                    .then(newUser => {
                        let token = generate(newUser)
                        res
                            .status(200)
                            .json({
                                token: token
                            })
                    })
                } else {
                    let token = generate(user)
                    res
                        .status(200)
                        .json(token)
                }
            })
            .catch(err => {
                console.log(err)
                res
                    .status(500)
                    .json({
                        msg: `Internal Server Error`,
                        err: err
                    })
            })
        }
    }
}

module.exports = Controller