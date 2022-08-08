const axios = require("axios");
const { formatItems, formatCategories } = require('../helpers/helpers')
function getQuery(url) {
    return axios.get(url).then((response) => {
        const items = formatItems(response.data.results);
        const categories = formatCategories(response.data.available_filters[0].values);
        const paging = response.data.paging;
        delete paging['primary_results'];
        return {
            paging,
            categories,
            items
        }
    }).catch((reason) => {
        return Promise.reject(reason);
    })
}

module.exports = {
    getQuery
}