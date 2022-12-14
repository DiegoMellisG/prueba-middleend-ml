function formatItems(items) {
    return items.map((item) => {
        const price = {
            currency: item.currency_id,
            amount: Math.trunc(item.price),
            decimals: item.price%1
        }
        return {
            id: item.id,
            title: item.title,
            price: price,
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
        };
    });
}


function formatCategories(categories) {
    return categories.map((category) => {
        return category.name
    })

}

module.exports = {
    formatItems,
    formatCategories
}