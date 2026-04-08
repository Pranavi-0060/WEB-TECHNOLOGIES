// Lab 12 Exercise 1 - REST API

const express = require("express");
const app = express();

app.use(express.json());

let products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
];

// GET all
app.get("/products", (req, res) => {
    res.json(products);
});

// GET by id
app.get("/products/:id", (req, res) => {
    const item = products.find(p => p.id == req.params.id);
    res.json(item || { message: "Product not found" });
});

// POST
app.post("/products", (req, res) => {
    const newItem = {
        id: products.length + 1,
        name: req.body.name
    };
    products.push(newItem);
    res.json(newItem);
});

// PUT
app.put("/products/:id", (req, res) => {
    const item = products.find(p => p.id == req.params.id);
    if (item) {
        item.name = req.body.name;
        res.json(item);
    } else {
        res.json({ message: "Not found" });
    }
});

// DELETE
app.delete("/products/:id", (req, res) => {
    products = products.filter(p => p.id != req.params.id);
    res.json({ message: "Deleted successfully" });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});