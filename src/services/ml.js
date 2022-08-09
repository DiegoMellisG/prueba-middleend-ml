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

function getItemDescription(url) {
    return axios.get(url).then((response) => {
        return response.data.plain_text
    }).catch((reason) => {
        return Promise.reject(reason);
    })
}

function getItem(url) {
    return axios.get(url).then((response) => {
        const price = {
            currency: response.data.currency_id,
            amount: Math.trunc(response.data.price),
            decimals: response.data.price%1
        }
        return {
            id: response.data.id,
            title: response.data.title,
            price: price,
            picture: response.data.thumbnail,
            condition: response.data.condition,
            free_shipping: response.data.shipping.free_shipping,
            sold_quantity: response.data.sold_quantity
        }
    }).catch((reason) => {
        return Promise.reject(reason);
    })
}

module.exports = {
    getQuery,
    getItemDescription,
    getItem
}