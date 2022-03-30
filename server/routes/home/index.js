const router = require('express').Router();
const services = require('../services/render');


module.exports = ()=> {
    router.get('/', services.home);
    return router
}

