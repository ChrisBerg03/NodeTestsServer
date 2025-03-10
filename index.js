const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model.js");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello from server");
});

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post("/api/products", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get("/api/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

mongoose
    .connect(
        "mongodb+srv://chris:MyvgwDZFersDa8eT@backenddb.njcns.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=backendDB"
    )
    .then(() => {
        app.listen(3000, () => {
            console.log("server is running on port 3000");
        });
        console.log("connected to server");
    })
    .catch(() => {
        console.log("failed to connect");
    });
