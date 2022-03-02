const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entryController')

router.get('/entries', entryController.getEntries);

router.get('/entries2', entryController.getEntries2);

module.exports = router;