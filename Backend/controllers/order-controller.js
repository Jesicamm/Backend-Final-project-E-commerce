
const Order = require("../models/order-model");
const User = require("../models/user-model");
const Product = require("../models/product-model");


class OrderController {
    constructor(){

    }

    //Create a new order
    async buy (userId, productId){
        const userEntity = await User.findById(userId)

        
        const productEntity = await Product.findById(productId);
        
        if(!userEntity || !productEntity){
            throw new Error("Product not found")
        }
        return await Order.create({
            userId: userId,
            productId: productId
          
        });
    };

    // Get all orders
    async showAllOrders(){
        return Order.find();

    };

};

const orderController = new OrderController();
module.exports = orderController;