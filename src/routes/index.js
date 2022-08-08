
const queryController = require('../controllers/queryController')

module.exports = (app) => {
    app.get('/query/:site', queryController.queryProcess);
}