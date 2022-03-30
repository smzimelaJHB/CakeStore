const axios = require('axios');

exports.home = (req, res) => {
    // Make a get request to /api/products
    axios.get('https://lit-thicket-18607.herokuapp.com/product/list')
        .then(function(response) {
            return res.render('index.ejs', { products: response.data });
        })
        .catch(err => {
            res.send(err);
        })
}

exports.listRoutes = (req, res) => {
    // Make a get request to /api/products
    axios.get('https://lit-thicket-18607.herokuapp.com/product/list')
        .then(function(response) {
            return res.render('product/list_cakes.ejs', { products: response.data });
        })
        .catch(err => {
            res.send(err);
        })
}

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/products
    axios.get('https://lit-thicket-18607.herokuapp.com/product/list')
        .then(function(response) {
            return res.render('product/index.ejs', { products: response.data });
        })
        .catch(err => {
            res.send(err);
        })
}


exports.update_product = (req, res) => {
    axios.get('https://lit-thicket-18607.herokuapp.com/product/list', { params: { id: req.query.id } })
        .then(function(productdata) {
            return res.render("product/update_product.ejs", { product: productdata.data })
        })
        .catch(err => {
            res.send(err);
        })
}

exports.delete_product = (req, res) => {
    axios.get('https://lit-thicket-18607.herokuapp.com/product/list', { params: { id: req.query.id } })
        .then(function(productdata) {
            return res.render("product/delete_product.ejs", { product: productdata.data })
        })
        .catch(err => {
            res.send(err);
        })
}