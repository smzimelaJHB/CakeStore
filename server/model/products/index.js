const mongoose = require('mongoose');

var product_schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    price : {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true,
        unique: true
    },
    description  : String,
    availability : String
    
})

const products=mongoose.model('products',product_schema);

module.exports = products;