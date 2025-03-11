const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please enter a name"],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        image: {
            type: String,
            required: true,
        },
    },
    {
        Timestamps: true,
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
