const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")
// const { Connect } = require("./conn.js")
// Connect
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors())
//
const mongoose = require("mongoose")
require('dotenv').config()
mongoose.connect("mongodb://rajendra0968jangid:KV4Dl3oLFrR3KG65@cluster0-shard-00-00.o6ae1.mongodb.net:27017,cluster0-shard-00-01.o6ae1.mongodb.net:27017,cluster0-shard-00-02.o6ae1.mongodb.net:27017/myfurniture?ssl=true&replicaSet=atlas-3hca2w-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0");
mongoose.connection.on('error', err => {
    logError(err);
});
mongoose.connection.on('connected', () => console.log('connected'));
//
app.get('/shop/alldata', (req, res) => {
    let data = [{
        id: 1,
        productImage: "images/product-3.png",
        productName: "hello",
        productPrice: 100,
        pQuantity: 1
    }, {
        id: 2,
        productImage: "images/product-1.png",
        productName: "Nordic Chair",
        productPrice: 50.00,
        pQuantity: 1
    }, {
        id: 3,
        productImage: "images/product-2.png",
        productName: "Kruzo Aero Chair",
        productPrice: 78.00,
        pQuantity: 1
    }, {
        id: 4,
        productImage: "images/product-3.png",
        productName: "Ergonomic Chair",
        productPrice: 43.00,
        pQuantity: 1
    }, {
        id: 5,
        productImage: "images/product-3.png",
        productName: "Nordic Chair",
        productPrice: 50.00,
        pQuantity: 1
    }, {
        id: 6,
        productImage: "images/product-1.png",
        productName: "Nordic Chair",
        productPrice: 50.00,
        pQuantity: 1
    }, {
        id: 7,
        productImage: "images/product-2.png",
        productName: "Kruzo Aero Chair",
        productPrice: 78.00,
        pQuantity: 1
    }, {
        id: 8,
        productImage: "images/product-3.png",
        productName: "Ergonomic Chair",
        productPrice: 43.00,
        pQuantity: 1
    }]
    res.json({ data: data })
})

app.get('/about/teams', (req, res) => {
    let data = [{ image: "images/person_1.jpg", name: "Lawson Arnold", postion: "CEO, Founder, Atty", description: " Separated they live in. Separated they live in Bookmarksgrov", more: "Learn More" }, { image: "images/person_2.jpg", name: "Jeremy Walker ", postion: "CEO, Founder, Atty", description: " Separated they live in. Separated they live in Bookmarksgrov", more: "Learn More" }, { image: "images/person_3.jpg", name: "Patrik White", postion: "CEO, Founder, Atty", description: " Separated they live in. Separated they live in Bookmarksgrov", more: "Learn More" }, { image: "images/person_4.jpg", name: "Kathryn Ryan", postion: "CEO, Founder, Atty", description: " Separated they live in. Separated they live in Bookmarksgrov", more: "Learn More" }]
    res.json({ data: data })
})

app.post('/contact/insert', (req, res) => {
    let data = req.body;
    console.log(data);
    //sql query or mongodb query
    res.json({ data: "", message: "Data inserted successfully" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})