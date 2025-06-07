const clothesData = require('../data/clothes/products.json');
const electronicData = require('../data/electronic/products.json');
const foodData = require('../data/food/products.json');
const fruitsData = require('../data/fruits/products.json');

const productController = (req, res) => {
    const { search, category } = req.query

    products = [];

    switch(category){
        case 'clothes': 
            products = [...clothesData]
            break;
        case 'electronic': 
            products = [...electronicData]
            break;
        case 'food': 
            products = [...foodData]
            break;
        case 'fruits': 
            products = [...fruitsData]
            break;
        default: 
            products = [...clothesData, ...electronicData, ...foodData, ...fruitsData]
    }

    if(search){
        item = search.toLowerCase();
        products = products.filter(p => 
            p.title.toLowerCase().includes(item)
        )
    }

    // Важно что не return
    res.json(products)

}

module.exports = { productController }

