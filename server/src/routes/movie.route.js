const express = require('express');
const router = express.Router();
const query = require('../axios/movie.queries');

//Movie Description (to movie page)
router.get('/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const movieDetail = await query.getMovieDetail(movieId);
        res.json(movieDetail[0])

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Movie Gallery (urls of shots)
router.get('/:movieId/gallery', async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const result = await query.getGallery(movieId);
        res.json(result)

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Movie References (Youtube or links of articles)
router.get('/:movieId/ref', async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const result = await query.getRef(movieId);
        res.json(result)

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
