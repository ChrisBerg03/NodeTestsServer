const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("hello from server");
});

// routes
app.use("/api/products", productRoute);

// mongoose / mongoDB database
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
