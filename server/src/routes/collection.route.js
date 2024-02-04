const express = require('express');
const router = express.Router();
const query = require('../axios/collection.queries');

//All movies
router.get('/', async (req, res) => {
    try {
        const result = await query.getAllMovies();
        res.json(result)

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;