const router = require('express').Router()

const authService = require('../services/auth-service')

module.exports = (app) => {
    router.post('/users', (req, res) => {
        authService.registerUser(req.body)
            .then((value) => {
                res.status(200).json(value)
            })
            .catch((err) => {
                res.status(200).json(err)
            })
    })

    router.post('/auth', (req, res) => {
        authService.login(req.body)
            .then((value) => {
                res.status(200).json(value)
            })
            .catch((err) => {
                res.status(200).json(err)
            })
    })

    app.use('/', router)
}