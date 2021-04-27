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
            1:"Fruit",
            2:"Vegetable",
            3:"Nuts",
            4:"Basket"
        }    
    },
    creationDate: {
        type: Date,
        default: new Date
    }
});



const Product = mongoose.model("Product", productSchema);
module.exports = Product;