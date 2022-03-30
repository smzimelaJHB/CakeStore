const router = require('express').Router()

const contactRoute = require('./contact')
const registerRoute = require('./register')
const loginRoute = require('./login')
const productRoute = require('./product')
const resetpassRoute = require('./resetpass')
const homeRoute = require('./home')

module.exports = () => {
    router.use('/', homeRoute());
    router.use('/register', registerRoute());
    router.use('/contact', contactRoute());
    router.use('/login', loginRoute());
    router.use('/product', productRoute());
    router.use('/resetpass', resetpassRoute());
    router.use('/list_cakes', productRoute());

    return router
}