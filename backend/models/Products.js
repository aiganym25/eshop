const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    id: String,
    url: String,
    detailsUrl: String,
    title: Object,
    price: Object,
    discount: String,
    tagline:String,
    category: String

});

module.exports = mongoose.model("products", ProductSchema);