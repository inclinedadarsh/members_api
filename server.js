// Importing the dotenv file
require("dotenv").config();

// Setting up express
const express = require("express");
const app = express();
const PORT = 3000;

// Setting up Mongoose and connection with the MongoDB
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

// Setting up Epxress middleware to accept JSON requests
app.use(express.json());

// Setting up Routes
const membersRoutes = require("./routes/members");
app.use("/members", membersRoutes);

// Starting the server
app.listen(PORT, () => {
  console.log("Server started!");
});
