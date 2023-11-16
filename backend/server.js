const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const Users = require("./models/Users");
const bcrypt = require("bcryptjs");
const Products = require("./models/Products");
const router = require("./routes/router");
const DefaultProductsData = require("./routes/defaultProductData");

const app = express();
const port = 3003;

// middleware
app.use(express.json())
app.use(cors());
app.use(router);

// connection url

const connection_url = `mongodb+srv://ospanaiganym:1111@cluster1.d99xjy2.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });


app.listen(port, () => console.log('listening on the port', port));
DefaultProductsData();