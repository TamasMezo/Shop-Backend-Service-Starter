const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handeling get requests to products"
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handeling post requests to products"
  });
});

module.exports = router;
