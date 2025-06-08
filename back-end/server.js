const express = require('express');
const cors = require('cors');
const path = require('path');

const exampleRouter = require('./src/routes/exampleRoute');
const productRouter = require('./src/routes/productRoute');

const authMiddleware = require('./auth.middleware');

const app = express();

app.use(express.json());
app.use(cors());

const baseUrl = '/api';

app.use(baseUrl + '/products', express.static(path.join(__dirname, 'public/products')))

app.use(baseUrl, exampleRouter);

app.use(baseUrl, productRouter);

// 404
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

// 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something Wrong!' });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));
