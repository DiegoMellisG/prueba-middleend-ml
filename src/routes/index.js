
const searchController = require('../controllers/searchController')
const itemController = require('../controllers/itemController')

module.exports = (app) => {
    app.get('/search/:site/:query', searchController.searchProcess);
    app.get('/items/:id', itemController.itemProcess);
}