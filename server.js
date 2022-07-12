const express = require("express");
const uri = "mongodb://localhost/productdb";
const mongoose = require("mongoose");

port = process.env.PORT || 3000;
app = express();
Product = require("./api/models/productListModel"); //create model loading hear

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("DB Connected!");
  } catch (err) {
    console.log(Error, err.message);
  }
}
connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./api/routers/productListRouter"); // importing route
routes(app); //register the route

app.get("*", (req, res) => {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);
console.log("product list RESTful API server started on: " + port);
