const express = require('express');
const router = express.Router();
const query = require('../axios/list.queries');


//All lists detail
router.get('/', async (req, res) => {
    try {
        const result = await query.getLists();
        res.json(result)

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:listId', async (req, res) => {
    const listId = req.params.listId;
    try {
        const result = await query.getListDetail(listId);
        res.json(result)

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;