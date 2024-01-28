const express = require("express");
const movieRoute = require("./movie.route.js");

const router = express.Router();

router.use("/movies", movieRoute);

module.exports = router;