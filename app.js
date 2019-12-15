const express = require("express");
const app = express();
const morgan = require("morgan");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

app.use(morgan("dev"));

/* app.use((req, res, next) => {
  res.status(200).json({
    message: "It works!"
  });
}); */

//Routes
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

module.exports = app;
