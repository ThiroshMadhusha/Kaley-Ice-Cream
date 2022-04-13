const express = require("express");
const inventorys = require("./data/inventorys");
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const useRoutes = require("./routes/userRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API IS RUNNING..");
});

// addInventory=notes


app.get("/api/inventorys", (req, res) => {
  res.json(inventorys);
});

app.use('/api/users', useRoutes)
app.use("/api/inventorys", inventoryRoutes); 

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started On PORT ${PORT}`));


