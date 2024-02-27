const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");

const Products = require("../models/Products");
const Users = require("../models/Users");
const bcrypt = require("bcryptjs");
const productsData = require("../constants/productsData");

router.get("/getProducts", async (req, res) => {
  try {
    const productsData = await Products.find();
    res.status(201).json(productsData);
  } catch (er) {
    console.log("error" + er.message);
  }
});

router.post("/editProduct", async (req, res) => {
  try {
    const { id, updatedProductData } = req.body;
    console.log(updatedProductData);

    // Find the product index in the products array
    const productIndex = productsData.findIndex((product) => product.id === id);

    // If the product exists, update it
    if (productIndex !== -1) {
      productsData[productIndex] = {
        ...productsData[productIndex],
        title: updatedProductData.title,
        price: {
          ...productsData[productIndex].price,
          cost: updatedProductData.price.cost,
        },
      };
    } else {
      return res.status(404).json({ error: "Product not found" });
    }

    // Delete all existing products
    await Products.deleteMany({});

    // Insert the updated products into the database
    const storeData = await Products.insertMany(productsData);

    // Respond with the updated product data
    res.status(200).json(storeData);
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const userDetail = await Users.findOne({ email: email });

    if (userDetail) {
      const isPasswordValid = await bcrypt.compare(
        password,
        userDetail.password,
      );

      if (isPasswordValid) {
        const { _id, email, fullName } = userDetail;
        res.json({ _id, email, fullName });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/auth/signup", async (req, res) => {
  try {
    const { email, password, fullName } = req.body;

    const encrypt_password = await bcrypt.hash(password, 10);

    const userExist = await Users.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ message: "The email is already in use!" });
    }

    const userDetail = {
      email: email,
      password: encrypt_password,
      fullName: fullName,
    };

    const newUser = await Users.create(userDetail);

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error during signup:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;
