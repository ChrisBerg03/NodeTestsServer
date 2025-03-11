const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
    getProducts,
    getSingleProduct,
    postProduct,
    updateSingleProduct,
    deleteSingleProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);

router.get("/:id", getSingleProduct);

router.post("/", postProduct);

router.put("/:id", updateSingleProduct);

router.delete("/:id", deleteSingleProduct);

module.exports = router;
