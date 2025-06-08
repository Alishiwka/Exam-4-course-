const clothesData = require('../data/clothes/products.json')
const electronicData = require('../data/electronic/products.json')
const foodData = require('../data/food/products.json')
const fruitsData = require('../data/fruits/products.json')

const productController = (req, res) => {
    const {search, category} = req.query

    let products = []

    switch(category){
        case'clothes':
            products = [...clothesData]
            break;
        case'electronic':
            products = [...electronicData]
            break;
        case'food':
            products = [...foodData]
            break;
        case'fruits':
            products = [...fruitsData]
            break;
        default:
            products = [...clothesData, ...electronicData, ...foodData, ...fruitsData]
    }


    if(search){
        i = search.toLowerCase()
        products = products.filter(p => p.title.toLowerCase().includes(i))
    }

    products = products.map(p => ({
        ...p,
        price: +p.price,
        image: p.image.replace('./', '/')
    }))


    res.json(products)
}

module.exports = {productController}