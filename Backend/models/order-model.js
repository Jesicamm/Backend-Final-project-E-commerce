//Requerimos todo lo necesario de mongoose

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;



const orderSchema = new Schema({
    
    
    userId: { 
        type: ObjectId, 
        ref: "User",
        required: true
    },
    productId: { 
        type: ObjectId, 
        ref: "Product",
        required: true
    },
    order_date:{
        type: Date,
        default: new Date
    },
    return_date:{
        type: Date,
        default: new Date(+new Date()+3*24*60*60*1000)
    },

})

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;