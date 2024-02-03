const express = require('express');
const router = express.Router();
const query = require('../axios/post.queries');


//All posts detail
router.get('/', async (req, res) => {
    try {
        const result = await query.getPosts();
        res.json(result)

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
        const result = await query.getPostDetail(postId);
        res.json(result[0])

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;