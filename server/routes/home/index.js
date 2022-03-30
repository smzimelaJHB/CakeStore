const router = require('express').Router();
const services = require('../services/render');


module.exports = () => {
    router.get('/', services.home);
    router.get('/list_cakes', services.listRoutes);
    return router
}