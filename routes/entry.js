const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entryController')

router.get('/entries', entryController.getEntries);
module.exports = router;