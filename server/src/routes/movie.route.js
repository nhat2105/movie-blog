const express = require('express');
const router = express.Router();
const query = require('../axios/queries');

router.get('/:movieId', async (req, res) => {
    const movieId = req.params.movieId;

    try {
        const moviePost = await query.getMoviePost(movieId);
        res.json(moviePost);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
