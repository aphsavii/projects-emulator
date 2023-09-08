const express = require('express');
const cors = require('cors');
const router = express.Router();

// Define API route for API 1
router.use(cors({ origin: '*' }));
router.get('/', (req, res) => {
    res.send('hello world');
});

module.exports = router;