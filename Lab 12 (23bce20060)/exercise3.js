// Lab 12 Exercise 3 - MongoDB CRUD

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
    name: String,
    marks: Number
});

// Model
const Student = mongoose.model("Student", studentSchema);

// CREATE
app.post("/students", async (req, res) => {
    const data = await Student.create(req.body);
    res.json(data);
});

// READ
app.get("/students", async (req, res) => {
    const data = await Student.find();
    res.json(data);
});

// UPDATE
app.put("/students/:id", async (req, res) => {
    const data = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(data);
});

// DELETE
app.delete("/students/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

app.listen(3000, () => {
    console.log("MongoDB server running");
});