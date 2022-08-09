const AVAILABLE_SITES = ['MLA', 'MLB', 'MLM']
const AVAILABLE_SORTS = ['price_asc', 'price_desc']
const AUTHOR = {
    name: "Diego",
    lastname: "Mellis"
}

const ITEM_MOCK = {
    "author": {
        "name": "Diego",
        "lastname": "Mellis"
    },
    "item": {
        "id": "MLA123456",
        "title": "Producto 1",
        "price": {
            "currency": "ARS",
            "amount": 1000,
            "decimals": 1000
        },
        "picture": "http://image-test.jpg",
        "condition": "new",
        "free_shipping": false,
        "sold_quantity": 0,
        "description": "Producto 1 test description"
    }
}
const SEARCH_QUERY_MOCK = {
    "paging": {
        "total": 1,
        "offset": 0,
        "limit": 1
    },
    "categories": [
        "Category 1"
    ],
    "items": [
        {
            "id": "MLA1234",
            "title": "Producto 1",
            "price": {
                "currency": "ARS",
                "amount": 10000,
                "decimals": 10000
            },
            "picture": "http://image-test.jpg",
            "condition": "new",
            "free_shipping": false
        }
    ]
}

module.exports = {
    AVAILABLE_SITES,
    AVAILABLE_SORTS,
    AUTHOR,
    ITEM_MOCK,
    SEARCH_QUERY_MOCK
}
