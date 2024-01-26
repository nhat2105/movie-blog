import express from "express";
import movieRoute from "./movie.route.js";

const router = express.Router();

router.use("/movie", movieRoute);

export default router;