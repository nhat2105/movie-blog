const express = require('express');
const router = express.Router();
const query = require('../axios/queries');

router.get('/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const movieDetail = await query.getMovieDetail(movieId);
        res.json(movieDetail[0])

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
