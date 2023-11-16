const Products = require("../models/Products");
const productsData = require("../constants/productsData");

const DefaultProductsData = async()=>{
    try {
        await Products.deleteMany({});
        const storeData = await Products.insertMany(productsData);
        console.log(storeData);
    } catch (error) {
        console.log("error" + error.message);
    }
};

module.exports = DefaultProductsData;