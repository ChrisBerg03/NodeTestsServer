const Product = require("../models/product.model.js");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProducts,
    getSingleProduct,
    deleteSingleProduct,
    updateSingleProduct,
    postProduct,
};
