// Lab 12 Exercise 2 - Middleware

const express = require("express");
const app = express();

// Global middleware
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

// Route middleware
const authCheck = (req, res, next) => {
    console.log("Checking authentication...");
    next();
};

// Another middleware
const logger = (req, res, next) => {
    console.log("Logging complete");
    next();
};

app.get("/dashboard", authCheck, logger, (req, res) => {
    res.send("Dashboard Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.listen(3000, () => {
    console.log("Middleware server running");
});