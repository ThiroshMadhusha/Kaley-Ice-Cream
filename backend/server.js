const express = require("express");
const addInventory = require("./data/addInventory");
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const useRoutes = require("./routes/userRoutes")

const app = express();
dotenv.config();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API IS RUNNING..");
});


app.get('/api/addInventory', (req, res) => {
    res.json(addInventory)
});

app.use('/api/users',useRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started On PORT ${PORT}`));


