const express = require('express')
const cors = require('cors')
const app = express()

const exampleRouter = require('./src/routes/exampleRoute')
const productRouter = require('./src/routes/productRoute')

const authMiddleware = require('./auth.middleware')

app.use(express.json())
app.use(cors())

const baseUrl = '/api' 

// example
app.use(baseUrl,authMiddleware, exampleRouter)

// products
app.use(baseUrl, productRouter)

// 500
app.use((req, res) => {
    res.status(500).json({ message: 'Something Wrong!'})
})
// 404
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' })
})


const PORT = 4000
app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`))   


// Вывод всех товаров