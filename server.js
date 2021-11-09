const express = require("express");
require("dotenv").config();
const mongodb = require("./config/mongo");
const app = express();
const todoRoute = require("./routes/todoRoutes");
//database
mongodb();
//middleware
app.use(express.json());
//routes
app.use("/todo", todoRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is looking for requests at Port: ${PORT}`);
});
