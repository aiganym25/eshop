const express = require("express");
const router = new express.Router();

const Products = require("../models/Products");
const Users = require("../models/Users");
const bcrypt = require("bcryptjs");

router.get("/getProducts", async(req, res) => {
    try{
       const productsData = await Products.find();
        res.status(201).json(productsData);
    } catch(er){
        console.log("error" + er.message)
    }
});

router.post("/auth/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const userDetail = await Users.findOne({ email: email });

        if (userDetail) {
            const isPasswordValid = await bcrypt.compare(password, userDetail.password);

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

router.post("/auth/signup", async(req, res) => {
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

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error during signup:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
})
module.exports = router;