const express = require('express');
const router = express.Router();

// Define API route for API 1
router.get('/', (req, res) => {
    res.send('hello world');
});

module.exports = router;