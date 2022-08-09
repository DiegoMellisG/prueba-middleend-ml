
const express = require('express')
const searchController = require('../controllers/searchController')
const itemController = require('../controllers/itemController')
const router = express.Router()

router.get('/search/:site/:query', searchController.searchProcess);
router.get('/items/:id', itemController.itemProcess);
module.exports = router