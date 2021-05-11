const Product = require("../models/product-model");

class ProductController {

    constructor() {
    }
    //Find All Products
    async indexAll() {
        return Product.find();
    }

    //Create a new product
    async createProduct(product) {
        return Product.create(product);
    };
    //Delete a product 
    async destroy(id) {
        return Product.findByIdAndRemove(id);
    };

};


const productController = new ProductController();
module.exports = productController;