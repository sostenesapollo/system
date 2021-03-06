const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{type: String},
    description: {type: String},
    url: {type: String},
});

const Product = mongoose.model('Product', ProductSchema)