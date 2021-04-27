const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    cathegory: {
        type: String,
        enum:
        {
            "Fruit":1,
            "Vegetable":2,
            "nuts":3,
            "basket": 4
        }    
    },
    creationDate: {
        type: Date,
        default: new Date
    }
});



const Product = mongoose.model("Product", productSchema);
module.exports = Product;