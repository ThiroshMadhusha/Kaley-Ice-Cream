const express = require("express");
const addInventory = require("./data/addInventory");
const dotenv = require('dotenv');
const connectDB = require("./config/db");

const app = express();
dotenv.config();

connectDB();

app.get("/", (req, res) => {
    res.send("API IS RUNNING..");
});


app.get('/api/addInventory', (req, res) => {
    res.json(addInventory)
});


app.get('/api/addInventory/:id', (req, res) => {
    const Inventory = addInventory.find((n) => n._id == req.params.id);

    res.send(Inventory);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started On PORT ${PORT}`));


