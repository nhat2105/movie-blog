const express = require("express");
const movieRoute = require("./movie.route.js");
const listRoute = require("./list.route.js")

const router = express.Router();

router.use("/movies", movieRoute);
router.use("/lists", listRoute);

module.exports = router;