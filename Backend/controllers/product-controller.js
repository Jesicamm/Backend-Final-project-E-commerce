const Product = require("../models/product-model");

class ProductController {

    constructor() {
    }
    //Find All Products
    async indexAll() {
        return Product.find();
    }

    //Crear y guardar una peli
    async createProduct(product) {
        return Product.create(product);
    };

};


const productController = new ProductController();
module.exports = productController;