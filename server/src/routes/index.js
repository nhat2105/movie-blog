const express = require("express");
const movieRoute = require("./movie.route.js");
const listRoute = require("./list.route.js")
const postRoute = require("./post.route.js")

const router = express.Router();

router.use("/movies", movieRoute);
router.use("/lists", listRoute);
router.use("/posts", postRoute);

module.exports = router;