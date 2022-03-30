var products = require('../../model/products/');



// create and save new product
exports.create = (req, res, next) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //fs.renameSync("assets/img/cakes/"+req.file.filename, "assets/img/cakes/"+req.file.filename.replace(req.file.filename,req.file.originalname));
    console.log(req.body);
    // new product
    const product = new products({
        name: req.body.name,
        price: req.body.price,
        image: req.file.filename,
        description: req.body.description,
        availability: req.body.availability
    })

    // save product in the database
    product
        .save(product)
        .then(data => {
            res.redirect('/product');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });
}

// retrieve and return all products/ retrieve and return a single product
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        products.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found product with id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving product with id " + id })
            })

    } else {
        products.find()
            .then(product => {
                res.send(product)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error Occurred while retrieving product information" })
            })
    }


}

// Update a new identified product by product id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = req.params.id;
    products.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update product with ${id}. Maybe product not found!` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update product information" })
        })
}

// Delete a product with specified product id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    products.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
            } else {
                res.status(200);
                res.redirect("/product");
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete product with id=" + id
            });
        });
}